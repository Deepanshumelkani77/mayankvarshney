import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-blue-100 mb-6">
                Your Trusted Partner for Professional Financial & Legal Services
              </p>
              <p className="text-lg text-blue-200">
                Mayank Varshney & Co. is dedicated to providing comprehensive accounting, taxation, and legal solutions to businesses and individuals across India.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-white/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/60 text-sm">Company Image</p>
                  <p className="text-white/40 text-xs mt-1">Recommended size: 800x600px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to simplify complex financial and legal processes, Mayank Varshney & Co. has grown into a trusted name in the industry. Our journey began with a simple mission: to provide professional, reliable, and affordable services to businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have helped hundreds of clients navigate the complexities of taxation, compliance, and business regulations. Our team of experienced professionals brings together expertise from various domains to offer comprehensive solutions under one roof.
            </p>
            <p className="text-gray-600">
              Today, we continue to uphold our commitment to excellence, integrity, and client satisfaction. We believe in building long-term relationships with our clients by delivering consistent quality and personalized service.
            </p>
          </div>
          {/* Image Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-500 text-sm">Office/Team Image</p>
                <p className="text-gray-400 text-xs mt-1">Recommended size: 600x600px</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="bg-[#2F6A9E] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses and individuals with expert financial guidance and legal support, ensuring compliance while maximizing growth opportunities. We strive to make complex regulatory processes simple and accessible for everyone.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="bg-[#2F6A9E] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred financial and legal services provider in India, known for our expertise, integrity, and commitment to client success. We aim to set new standards in service excellence and innovation.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Highly qualified professionals with years of experience</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">We respect deadlines and deliver on time, every time</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Client Focus</h3>
              <p className="text-gray-600 text-sm">Personalized solutions tailored to your specific needs</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm">Built on foundation of honesty and ethical practices</p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Accounting', 'GST', 'ITR/TDS', 'MCA', 'DGFT', 'Legal Drafting', 'Registration', 'Compliance', 'Investment', 'ROC', 'Labour', 'MSME'].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Services Offered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Team Member Photo</p>
                  <p className="text-gray-400 text-xs mt-1">Recommended: 400x500px</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Mayank Varshney</h3>
                <p className="text-[#2F6A9E] font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">Leading the company with vision and expertise in financial and legal services.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Team Member Photo</p>
                  <p className="text-gray-400 text-xs mt-1">Recommended: 400x500px</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Senior Partner</h3>
                <p className="text-[#2F6A9E] font-medium mb-3">Taxation Expert</p>
                <p className="text-gray-600 text-sm">Specializing in income tax, GST, and corporate taxation matters.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Team Member Photo</p>
                  <p className="text-gray-400 text-xs mt-1">Recommended: 400x500px</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Legal Head</h3>
                <p className="text-[#2F6A9E] font-medium mb-3">Legal Advisor</p>
                <p className="text-gray-600 text-sm">Expert in company law, legal drafting, and compliance matters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Mayank Varshney & Co. for their financial and legal needs. Let us help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2F6A9E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-[#2F6A9E] text-[#2F6A9E] px-8 py-3 rounded-lg font-semibold hover:bg-[#2F6A9E] hover:text-white transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
