import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ServiceLanding = () => {
  const { t } = useTranslation()
  const { serviceId } = useParams()
  const [activeSection, setActiveSection] = useState('overview')
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '' })
  const [heroFocused, setHeroFocused] = useState('')
  const [heroSubmitted, setHeroSubmitted] = useState(false)

  const handleHeroSubmit = (e) => {
    e.preventDefault()
    setHeroSubmitted(true)
  }

  // Service data configuration
  const serviceData = {
    'business-registration': {
      title: 'Business Registration',
      subtitle: 'Save 50% Today on Professional Services',
      description: 'Avail consultation from our seasoned consultants for expert support in business registration in India. Register your business with us, just like 50,000+ entrepreneurs Pan India',
      whatIncluded: [
        'Registration in 1-2 Weeks',
        'MCA Name Approval',
        'DSC in 2-4 Days',
        'DIN, PAN, and SPICE+ Compliance',
        'MOA & AOA Drafting'
      ],
      stats: {
        clients: '42801',
        advisors: '3500',
        offices: '50'
      }
    },
    'compliance': {
      title: 'Compliance Services',
      subtitle: 'Expert Compliance Solutions for Your Business',
      description: 'Stay compliant with all regulatory requirements. Our experts ensure your business meets all compliance standards seamlessly.',
      whatIncluded: [
        'Annual Compliance Filing',
        'ROC Filings',
        'Statutory Audits',
        'GST Compliance',
        'Income Tax Filing'
      ],
      stats: {
        clients: '42801',
        advisors: '3500',
        offices: '50'
      }
    },
    'legal-drafting': {
      title: 'Legal Drafting Services',
      subtitle: 'Professional Legal Documentation',
      description: 'Get expert legal drafting services for all your business needs. Our legal experts ensure accurate and compliant documentation.',
      whatIncluded: [
        'Contract Drafting',
        'Agreement Preparation',
        'Legal Notices',
        'MOA & AOA Drafting',
        'Legal Consultation'
      ],
      stats: {
        clients: '42801',
        advisors: '3500',
        offices: '50'
      }
    },
    'legal-services': {
      title: 'Legal Services',
      subtitle: 'Comprehensive Legal Solutions',
      description: 'Complete legal services for your business. From litigation to corporate law, we cover all your legal requirements.',
      whatIncluded: [
        'Corporate Law',
        'Civil Litigation',
        'Criminal Matters',
        'Legal Consultation',
        'Dispute Resolution'
      ],
      stats: {
        clients: '42801',
        advisors: '3500',
        offices: '50'
      }
    },
    'it-tds': {
      title: 'IT & TDS Services',
      subtitle: 'Expert Taxation Solutions',
      description: 'Comprehensive IT and TDS services for individuals and businesses. Ensure tax compliance with our expert guidance.',
      whatIncluded: [
        'Income Tax Filing',
        'TDS Returns',
        'Tax Planning',
        'Tax Audit',
        'GST Registration'
      ],
      stats: {
        clients: '42801',
        advisors: '3500',
        offices: '50'
      }
    }
  }

  const service = serviceData[serviceId] || serviceData['business-registration']

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'advantages', label: 'Advantages' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'process', label: 'Process' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'consultation', label: 'Free Consultation' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
     <div className="bg-[#053131] text-white py-2">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-blue-100 text-center">We are India's leading brand for Company Registration. Trust our expert — Start your dream business with us!</p>
        </div>
      </div>

      {/* Hero Section */}
      {/*
        Left: clean, no background — sits on white page background.
        Right: instead of a decorative shape, the visual is a stack of "certificate" cards —
        grounded in what this business actually delivers (an official registration document),
        with a soft seal/stamp motif and subtle depth from layered offset cards.
      */}
      <div className="relative bg-white py-20 pt-8 overflow-hidden">
        {/* faint dotted texture, kept very subtle, only in the right half */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #2F6A9E 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900">
              <span className="inline-block bg-[#053131]/5 text-[#053131] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#053131]/10">
                Trusted by 50,000+ businesses across India
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">{service.title} in India</h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#2F6A9E]">{service.subtitle}</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* What's Included — clean 2-column grid */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">What's Included?</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.whatIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#2F6A9E]">{service.stats.clients}</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#2F6A9E]">{service.stats.advisors}</div>
                  <div className="text-sm text-gray-500">Expert Advisors</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#2F6A9E]">{service.stats.offices}</div>
                  <div className="text-sm text-gray-500">Branch Offices</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2F6A9E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1a4a75] transition-colors shadow-lg">
                  Schedule a Call
                </button>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
                  Get Free Expert Consultation
                </button>
              </div>
            </div>

            {/* Right: Free Consultation form */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-full max-w-md">
                {/* soft glow behind the form for depth */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#2F6A9E]/20 via-[#E5F0E5] to-emerald-200/30 rounded-[2rem] blur-xl opacity-70" />

                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 overflow-hidden">
                  {/* decorative corner accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#053131]/5 rounded-full" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-500/5 rounded-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Limited time offer</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Get Free Consultation</h3>
                    <p className="text-sm text-gray-500 mb-6">Talk to an expert in the next 30 minutes — no charge, no obligation.</p>

                    {heroSubmitted ? (
                      <div className="py-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Request received!</h4>
                        <p className="text-sm text-gray-500">Our expert will call you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleHeroSubmit} className="space-y-4">
                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              heroFocused === 'name' || heroForm.name
                                ? '-top-2 text-xs bg-white px-1 text-[#2F6A9E] font-medium'
                                : 'top-3.5 text-sm text-gray-400'
                            }`}
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={heroForm.name}
                            onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                            onFocus={() => setHeroFocused('name')}
                            onBlur={() => setHeroFocused('')}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F6A9E] outline-none transition-all text-gray-800"
                          />
                        </div>

                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              heroFocused === 'phone' || heroForm.phone
                                ? '-top-2 text-xs bg-white px-1 text-[#2F6A9E] font-medium'
                                : 'top-3.5 text-sm text-gray-400'
                            }`}
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                            onFocus={() => setHeroFocused('phone')}
                            onBlur={() => setHeroFocused('')}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F6A9E] outline-none transition-all text-gray-800"
                          />
                        </div>

                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              heroFocused === 'email' || heroForm.email
                                ? '-top-2 text-xs bg-white px-1 text-[#2F6A9E] font-medium'
                                : 'top-3.5 text-sm text-gray-400'
                            }`}
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={heroForm.email}
                            onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                            onFocus={() => setHeroFocused('email')}
                            onBlur={() => setHeroFocused('')}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2F6A9E] outline-none transition-all text-gray-800"
                          />
                        </div>

                        <button
                          type="submit"
                          className="group w-full bg-[#053131] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#0a4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                          Get Free Consultation
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>

                        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
                          </svg>
                          Your information is 100% secure
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#053131] shadow-lg shadow-black/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-5 py-2.5 text-sm font-semibold whitespace-nowrap rounded-full transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#E5F0E5] text-[#053131] shadow-sm'
                      : 'text-[#E5F0E5]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.label}
                </button>
                {index < sections.length - 1 && (
                  <span className="w-px h-4 bg-white/10 mx-0.5 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Overview Section */}
      <div id="overview" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            {service.title} - An Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center max-w-6xl mx-auto">
            {/* Left: text content */}
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {service.title} is a crucial step for any business looking to establish itself in the Indian market.
                Our expert team ensures a smooth and hassle-free registration process, allowing you to focus on growing your business.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why is {service.title} Required?</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proper registration provides legal recognition, protects your business interests, and enables you to operate
                within the regulatory framework. It also opens up opportunities for funding, partnerships, and growth.
              </p>
            </div>

            {/* Right: certificate-style card */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-full max-w-sm h-[420px]">
                {/* back card — offset, tilted, faint */}
                <div className="absolute top-6 left-6 w-full h-full bg-[#E5F0E5] rounded-3xl rotate-3 shadow-md" />
                {/* middle card */}
                <div className="absolute top-3 left-3 w-full h-full bg-[#2F6A9E]/15 rounded-3xl rotate-1 shadow-md" />

                {/* front card — the actual "certificate" */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#053131] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#E5F0E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Certificate of {service.title}</span>
                  </div>

                  {/* Image slot — drop a real photo/illustration here */}
                  <div className="flex-1 rounded-2xl bg-[#F4F8F4] border-2 border-dashed border-[#2F6A9E]/20 flex items-center justify-center overflow-hidden mb-5">
                    {/* Replace this placeholder block with: <img src="..." className="w-full h-full object-cover" /> */}
                    <div className="text-center px-6">
                      <svg className="w-12 h-12 mx-auto text-[#2F6A9E]/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-400">Add your service image here</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-5 border-t border-dashed border-gray-200">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Issued by</div>
                      <div className="text-sm font-semibold text-gray-700">Govt. of India</div>
                    </div>
                    {/* seal / stamp motif */}
                    <div className="relative w-14 h-14 rounded-full border-2 border-[#2F6A9E]/30 flex items-center justify-center">
                      <div className="absolute inset-1 rounded-full border border-dashed border-[#2F6A9E]/40" />
                      <svg className="w-6 h-6 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* floating "verified" chip */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Govt. Approved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div id="advantages" className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Advantages of {service.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Limited Liability Protection', icon: '🛡️' },
              { title: 'Greater Credibility', icon: '✓' },
              { title: 'Funding Access', icon: '💰' },
              { title: 'Perpetual Succession', icon: '🔄' },
              { title: 'Separate Legal Entity', icon: '⚖️' },
              { title: 'Tax Benefits', icon: '📊' }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">
                  Enjoy the benefits of professional {service.title.toLowerCase()} with expert guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div id="eligibility" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Eligibility Criteria for {service.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Checklist for {service.title}:</h3>
              <ul className="space-y-3">
                {[
                  'Minimum 2 directors for Private Limited Company',
                  'Minimum 2 shareholders',
                  'Director must be at least 18 years old',
                  'Valid PAN card for all directors',
                  'Valid address proof for registered office',
                  'No criminal record for directors',
                  'Indian resident or foreign national with valid documents'
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Required Section */}
      <div id="documents" className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Documents Required for {service.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  For Directors
                </h3>
                <ul className="space-y-2">
                  {['PAN Card', 'Aadhaar Card', 'Passport Size Photograph', 'Address Proof', 'Email ID', 'Mobile Number'].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  For Company
                </h3>
                <ul className="space-y-2">
                  {['Office Address Proof', 'NOC from Property Owner', 'Utility Bill', 'Business Plan', 'MOA & AOA Draft', 'Digital Signature Certificate'].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Step-by-Step {service.title} Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Consultation', description: 'Initial discussion to understand your requirements' },
              { step: 2, title: 'Documentation', description: 'Collection and preparation of necessary documents' },
              { step: 3, title: 'Application', description: 'Filing of application with concerned authorities' },
              { step: 4, title: 'Approval', description: 'Tracking and follow-up for approval' },
              { step: 5, title: 'Completion', description: 'Delivery of registration documents' }
            ].map((process, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2F6A9E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: `What documents are required for ${service.title}?`,
                answer: 'The required documents typically include identity proof, address proof, photographs, and business-specific documents. Our team will guide you through the complete documentation process.'
              },
              {
                question: `How long does ${service.title} take?`,
                answer: 'The timeline varies depending on the type of service and government processing times. Typically, it takes 1-2 weeks for most registrations.'
              },
              {
                question: `What is the cost of ${service.title}?`,
                answer: 'Our pricing is competitive and transparent. Contact us for a detailed quote based on your specific requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Consultation Form Section */}
      <div id="consultation" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Get Free Consultation
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition-all">
                    <option>{service.title}</option>
                    <option>Business Registration</option>
                    <option>Compliance Services</option>
                    <option>Legal Drafting</option>
                    <option>Legal Services</option>
                    <option>IT & TDS Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for professional {service.title.toLowerCase()} services
          </p>
          <button className="bg-white text-[#2F6A9E] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceLanding