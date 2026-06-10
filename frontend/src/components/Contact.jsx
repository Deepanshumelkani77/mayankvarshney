import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Contact Us</h1>
          <p className="text-sm text-blue-100">Get in touch with Mayank Varshney & Co.</p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-rows-3 gap-4 h-full">
          {/* Row 1: Contact Information */}
          <div className="grid grid-cols-4 gap-3">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow p-3 flex items-center space-x-3">
              <div className="bg-[#2F6A9E] p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-xs">Company</h3>
                <p className="text-gray-600 text-xs truncate">Mayank Varshney & Co.</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow p-3 flex items-center space-x-3">
              <div className="bg-[#2F6A9E] p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-xs">Address</h3>
                <p className="text-gray-600 text-xs truncate">Shop FF 05, Rise Retailia 1, Sector 1, Greater Noida West, UP - 201306</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow p-3 flex items-center space-x-3">
              <div className="bg-[#2F6A9E] p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-xs">Email</h3>
                <a href="mailto:care@mayankvarshney.com" className="text-[#2F6A9E] text-xs hover:underline truncate block">
                  care@mayankvarshney.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow p-3 flex items-center space-x-3">
              <div className="bg-[#2F6A9E] p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-xs">Phone</h3>
                <a href="tel:+919999117576" className="text-[#2F6A9E] text-xs hover:underline truncate block">
                  +91 9999117576
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: Contact Form */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none text-sm"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none text-sm"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none text-sm"
                >
                  <option value="">Select subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Accounting Services">Accounting</option>
                  <option value="GST Services">GST</option>
                  <option value="ITR/TDS Services">ITR/TDS</option>
                  <option value="MCA Services">MCA</option>
                  <option value="DGFT Services">DGFT</option>
                  <option value="Legal Drafting">Legal Drafting</option>
                  <option value="Registration Services">Registration</option>
                  <option value="Compliance Services">Compliance</option>
                  <option value="Investment Advisory">Investment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-span-3">
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none resize-none text-sm"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-[#2F6A9E] text-white py-2 px-4 rounded font-semibold hover:bg-[#1a4a75] transition-colors text-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Row 3: Map */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-2">
              <h3 className="font-semibold text-gray-800 text-sm">Our Location</h3>
            </div>
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5666666666667!2d77.4914!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea8b0e0e0e0e%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjknMzMuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mayank Varshney & Co. Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
