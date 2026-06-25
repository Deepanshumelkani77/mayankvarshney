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
      stats: { clients: '42801', advisors: '3500', offices: '50' }
    },
    'compliance': {
      title: 'Compliance Services',
      subtitle: 'Expert Compliance Solutions for Your Business',
      description: 'Stay compliant with all regulatory requirements. Our experts ensure your business meets all compliance standards seamlessly.',
      whatIncluded: ['Annual Compliance Filing', 'ROC Filings', 'Statutory Audits', 'GST Compliance', 'Income Tax Filing'],
      stats: { clients: '42801', advisors: '3500', offices: '50' }
    },
    'legal-drafting': {
      title: 'Legal Drafting Services',
      subtitle: 'Professional Legal Documentation',
      description: 'Get expert legal drafting services for all your business needs. Our legal experts ensure accurate and compliant documentation.',
      whatIncluded: ['Contract Drafting', 'Agreement Preparation', 'Legal Notices', 'MOA & AOA Drafting', 'Legal Consultation'],
      stats: { clients: '42801', advisors: '3500', offices: '50' }
    },
    'legal-services': {
      title: 'Legal Services',
      subtitle: 'Comprehensive Legal Solutions',
      description: 'Complete legal services for your business. From litigation to corporate law, we cover all your legal requirements.',
      whatIncluded: ['Corporate Law', 'Civil Litigation', 'Criminal Matters', 'Legal Consultation', 'Dispute Resolution'],
      stats: { clients: '42801', advisors: '3500', offices: '50' }
    },
    'it-tds': {
      title: 'IT & TDS Services',
      subtitle: 'Expert Taxation Solutions',
      description: 'Comprehensive IT and TDS services for individuals and businesses. Ensure tax compliance with our expert guidance.',
      whatIncluded: ['Income Tax Filing', 'TDS Returns', 'Tax Planning', 'Tax Audit', 'GST Registration'],
      stats: { clients: '42801', advisors: '3500', offices: '50' }
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
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf8' }}>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes chipFloat1 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes chipFloat2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes livePing {
          0% { transform: scale(1); opacity: 0.8; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes shimmerBtn {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
        .hero-card-float { animation: heroFloat 5s ease-in-out infinite; }
        .chip-float-1 { animation: chipFloat1 6s ease-in-out infinite; }
        .chip-float-2 { animation: chipFloat2 7s ease-in-out infinite; }
        .live-ping { animation: livePing 1.8s ease-out infinite; }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: shimmerBtn 3s 1.5s infinite linear;
        }
      `}</style>

      {/* Top Banner */}
      <div style={{ backgroundColor: '#053131' }} className="text-white py-2">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center" style={{ color: '#E5F0E5' }}>
            We are India's leading brand for Company Registration. Trust our expert — Start your dream business with us!
          </p>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <div className="relative bg-white py-16 pt-8 overflow-hidden">
        {/* Faint dot texture right half */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #009966 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            opacity: 0.04
          }}
        />

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

            {/* ── LEFT CONTENT ── */}
            <div className="text-gray-900">
              <span
                className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border"
                style={{ backgroundColor: '#E5F0E5', color: '#053131', borderColor: '#009966' }}
              >
                Trusted by 50,000+ businesses across India
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                {service.title} in India
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#009966' }}>
                {service.subtitle}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">What's Included?</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.whatIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5F0E5' }}>
                        <svg className="w-3 h-3" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: service.stats.clients, lbl: 'Happy Clients' },
                  { val: service.stats.advisors, lbl: 'Expert Advisors' },
                  { val: service.stats.offices, lbl: 'Branch Offices' },
                ].map((s, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#245988' }}>{s.val}</div>
                    <div className="text-sm text-gray-500">{s.lbl}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg"
                  style={{ backgroundColor: '#245988' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#053131'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#245988'}
                >
                  Schedule a Call
                </button>
                <button
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg"
                  style={{ backgroundColor: '#009966' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#007a52'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#009966'}
                >
                  Get Free Expert Consultation
                </button>
              </div>
            </div>

            {/* ── RIGHT: FORM CARD ── */}
            <div className="flex items-center justify-center relative py-8">
              <div className="relative w-full max-w-md">

                {/* Backing cards for depth */}
                <div className="absolute top-4 -left-3 right-3 bottom-[-14px] rounded-3xl rotate-[3deg] z-0 opacity-60" style={{ backgroundColor: '#E5F0E5' }} />
                <div className="absolute top-2 -left-1.5 right-1.5 bottom-[-7px] rounded-3xl rotate-[1.2deg] z-[1]" style={{ backgroundColor: '#009966', opacity: 0.15 }} />

                {/* Floating chip — top right */}
                <div className="chip-float-1 absolute -top-4 -right-3 z-20 flex items-center gap-2 bg-white rounded-2xl border border-gray-100 shadow-xl px-3 py-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5F0E5' }}>
                    <svg className="w-4 h-4" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-tight">Govt. Verified</p>
                    <p className="text-[10px] text-gray-400">MCA Approved</p>
                  </div>
                </div>

                {/* Floating chip — bottom left */}
                <div className="chip-float-2 absolute -bottom-4 -left-3 z-20 flex items-center gap-2 bg-white rounded-2xl border border-gray-100 shadow-xl px-3 py-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5F0E5' }}>
                    <svg className="w-4 h-4" style={{ color: '#245988' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-tight">Reply in 30 min</p>
                    <p className="text-[10px] text-gray-400">Mon–Sat, 9am–7pm</p>
                  </div>
                </div>

                {/* Main card */}
                <div className="hero-card-float relative z-10 bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl">

                  {/* Card header */}
                  <div
                    className="relative px-6 pt-5 pb-5 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #053131 0%, #245988 100%)' }}
                  >
                    {/* dot texture */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                        opacity: 0.07
                      }}
                    />
                    {/* glow blobs */}
                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ backgroundColor: 'rgba(36,89,136,0.3)' }} />
                    <div className="absolute -bottom-6 left-6 w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(229,240,229,0.1)' }} />

                    <div className="relative z-10">
                      {/* Live pill */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="live-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#E5F0E5' }} />
                          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#E5F0E5' }} />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#E5F0E5' }}>Experts online now</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Get Free Consultation</h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(229,240,229,0.7)' }}>
                        Talk to an expert within 30 minutes — no charge, no obligation.
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)' }} />
                  </div>

                  {/* Form body */}
                  <div className="px-6 pt-5 pb-6">
                    {heroSubmitted ? (
                      <div className="py-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5F0E5' }}>
                          <svg className="w-8 h-8" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Request received!</h4>
                        <p className="text-sm text-gray-500">Our expert will call you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleHeroSubmit} className="space-y-3.5">

                        {/* Name */}
                        <div>
                          <label className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#053131', opacity: 0.6 }}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={heroForm.name}
                            onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                            onFocus={() => setHeroFocused('name')}
                            onBlur={() => setHeroFocused('')}
                            placeholder="Enter your full name"
                            className="w-full px-3.5 py-2.5 rounded-xl outline-none text-sm text-gray-800 transition-all"
                            style={{
                              border: heroFocused === 'name' ? '1.5px solid #245988' : '1.5px solid #e2e8f0',
                              backgroundColor: heroFocused === 'name' ? '#fff' : '#f8faf8',
                              boxShadow: heroFocused === 'name' ? '0 0 0 3px rgba(36,89,136,0.12)' : 'none'
                            }}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#053131', opacity: 0.6 }}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                            onFocus={() => setHeroFocused('phone')}
                            onBlur={() => setHeroFocused('')}
                            placeholder="+91 98765 43210"
                            className="w-full px-3.5 py-2.5 rounded-xl outline-none text-sm text-gray-800 transition-all"
                            style={{
                              border: heroFocused === 'phone' ? '1.5px solid #245988' : '1.5px solid #e2e8f0',
                              backgroundColor: heroFocused === 'phone' ? '#fff' : '#f8faf8',
                              boxShadow: heroFocused === 'phone' ? '0 0 0 3px rgba(36,89,136,0.12)' : 'none'
                            }}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#053131', opacity: 0.6 }}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={heroForm.email}
                            onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                            onFocus={() => setHeroFocused('email')}
                            onBlur={() => setHeroFocused('')}
                            placeholder="you@email.com"
                            className="w-full px-3.5 py-2.5 rounded-xl outline-none text-sm text-gray-800 transition-all"
                            style={{
                              border: heroFocused === 'email' ? '1.5px solid #245988' : '1.5px solid #e2e8f0',
                              backgroundColor: heroFocused === 'email' ? '#fff' : '#f8faf8',
                              boxShadow: heroFocused === 'email' ? '0 0 0 3px rgba(36,89,136,0.12)' : 'none'
                            }}
                          />
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          className="shimmer-btn group w-full text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all relative overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #053131 0%, #245988 100%)',
                            boxShadow: '0 4px 18px rgba(36,89,136,0.4)'
                          }}
                          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 7px 24px rgba(36,89,136,0.55)'}
                          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(36,89,136,0.4)'}
                        >
                          <span className="relative z-10">Get My Free Consultation</span>
                          <svg
                            className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>

                        {/* Security note */}
                        <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
                          </svg>
                          100% secure &amp; confidential · No spam, ever
                        </p>
                      </form>
                    )}

                    {/* Divider */}
                    <div className="my-4 h-px" style={{ background: 'linear-gradient(to right, transparent, #E5F0E5, transparent)' }} />

                    {/* Trust badges */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          icon: (
                            <svg className="w-4 h-4" style={{ color: '#245988' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          ),
                          bgColor: '#E5F0E5', val: '50K+', lbl: 'Happy Clients'
                        },
                        {
                          icon: (
                            <svg className="w-4 h-4" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ),
                          bgColor: '#E5F0E5', val: '3500+', lbl: 'Expert Advisors'
                        },
                        {
                          icon: (
                            <svg className="w-4 h-4" style={{ color: '#053131' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          ),
                          bgColor: '#E5F0E5', val: '50+', lbl: 'Branch Offices'
                        },
                      ].map((b, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-2 text-center transition-all cursor-default border"
                          style={{ backgroundColor: '#f8faf8', borderColor: '#E5F0E5' }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E5F0E5'; e.currentTarget.style.borderColor = '#009966'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f8faf8'; e.currentTarget.style.borderColor = '#E5F0E5'; }}
                        >
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center mx-auto mb-1.5" style={{ backgroundColor: b.bgColor }}>
                            {b.icon}
                          </div>
                          <div className="text-sm font-bold" style={{ color: '#053131' }}>{b.val}</div>
                          <div className="text-[9.5px] text-gray-400 leading-tight mt-0.5">{b.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ── END RIGHT ── */}

          </div>
        </div>
      </div>

      {/* ── STICKY NAV ── */}
      <div className="sticky top-0 z-50 shadow-lg border-b" style={{ backgroundColor: '#053131', borderColor: 'rgba(229,240,229,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-1 py-3 overflow-x-auto scrollbar-hide">
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="relative px-5 py-2.5 text-sm font-semibold whitespace-nowrap rounded-full transition-all duration-200"
                  style={
                    activeSection === section.id
                      ? { backgroundColor: '#009966', color: '#fff', boxShadow: '0 2px 8px rgba(0,153,102,0.4)' }
                      : { color: 'rgba(229,240,229,0.65)', backgroundColor: 'transparent' }
                  }
                  onMouseEnter={e => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.color = '#E5F0E5'
                      e.currentTarget.style.backgroundColor = 'rgba(229,240,229,0.08)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.color = 'rgba(229,240,229,0.65)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {section.label}
                </button>
                {index < sections.length - 1 && (
                  <span className="w-px h-4 mx-0.5 flex-shrink-0" style={{ backgroundColor: 'rgba(229,240,229,0.15)' }} />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <div id="overview" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            {service.title} - An Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center max-w-8xl mx-auto">
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

            <div className="flex items-center justify-center relative">
              <div className="relative w-full max-w-sm h-[420px]">
                <div className="absolute top-6 left-6 w-full h-full rounded-3xl rotate-3 shadow-md" style={{ backgroundColor: '#E5F0E5' }} />
                <div className="absolute top-3 left-3 w-full h-full rounded-3xl rotate-1 shadow-md" style={{ backgroundColor: 'rgba(36,89,136,0.12)' }} />
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#009966' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">Certificate of {service.title}</span>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-dashed flex items-center justify-center overflow-hidden mb-5" style={{ backgroundColor: '#E5F0E5', borderColor: 'rgba(0,153,102,0.3)' }}>
                    <div className="text-center px-6">
                      <svg className="w-12 h-12 mx-auto mb-2" style={{ color: 'rgba(0,153,102,0.35)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center" style={{ border: '2px solid rgba(0,153,102,0.4)' }}>
                      <div className="absolute inset-1 rounded-full border border-dashed" style={{ borderColor: 'rgba(0,153,102,0.5)' }} />
                      <svg className="w-6 h-6" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-white" style={{ backgroundColor: '#009966' }}>
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

      {/* ── ADVANTAGES ── */}
      <div id="advantages" className="py-16" style={{ backgroundColor: '#E5F0E5' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Advantages of {service.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Limited Liability Protection', icon: '🛡️' },
              { title: 'Greater Credibility', icon: '⭐' },
              { title: 'Funding Access', icon: '💰' },
              { title: 'Perpetual Succession', icon: '🔄' },
              { title: 'Separate Legal Entity', icon: '⚖️' },
              { title: 'Tax Benefits', icon: '📊' }
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border transition-all"
                style={{ borderColor: 'rgba(0,153,102,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,153,102,0.15)'; e.currentTarget.style.borderColor = '#009966'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'rgba(0,153,102,0.12)'; }}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                <p className="text-gray-500">
                  Enjoy the benefits of professional {service.title.toLowerCase()} with expert guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ELIGIBILITY ── */}
      <div id="eligibility" className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Eligibility Criteria for {service.title}
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="rounded-xl p-8 border" style={{ backgroundColor: '#E5F0E5', borderColor: 'rgba(0,153,102,0.15)' }}>
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
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(0,153,102,0.15)' }}>
                      <svg className="w-3 h-3" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── DOCUMENTS ── */}
      <div id="documents" className="py-16" style={{ backgroundColor: '#f8faf8' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Documents Required for {service.title}
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'For Directors',
                  icon: (
                    <svg className="w-6 h-6" style={{ color: '#245988' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  docs: ['PAN Card', 'Aadhaar Card', 'Passport Size Photograph', 'Address Proof', 'Email ID', 'Mobile Number']
                },
                {
                  title: 'For Company',
                  icon: (
                    <svg className="w-6 h-6" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  docs: ['Office Address Proof', 'NOC from Property Owner', 'Utility Bill', 'Business Plan', 'MOA & AOA Draft', 'Digital Signature Certificate']
                }
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: 'rgba(0,153,102,0.12)' }}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    {card.icon} {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.docs.map((doc, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#009966' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
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
                  <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg" style={{ backgroundColor: '#009966', boxShadow: '0 4px 14px rgba(0,153,102,0.3)' }}>
                    {process.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 pl-6" style={{ borderLeft: '2px solid #E5F0E5' }}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQs ── */}
      <div id="faqs" className="py-16" style={{ backgroundColor: '#E5F0E5' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-8xl mx-auto space-y-4">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: 'rgba(0,153,102,0.12)' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#053131' }}>{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    

      {/* ── CTA BANNER ── */}
      <div className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #053131 0%, #009966 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(229,240,229,0.8)' }}>
            Contact our expert team today for professional {service.title.toLowerCase()} services
          </p>
          <button
            className="px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            style={{ backgroundColor: '#245988', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#053131'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#245988'}
          >
            Get Free Consultation
          </button>
        </div>
      </div>

    </div>
  )
}

export default ServiceLanding