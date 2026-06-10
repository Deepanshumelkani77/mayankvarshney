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
    <div className="min-h-screen bg-[#E5F0E5]">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <p className="text-xl text-blue-100">Get in touch with Mayank Varshney & Co.</p>
        </div>
      </div>
 
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {/* Left: Contact Information */}
          <div className="space-y-6 p-4 overflow-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">Have questions about our services? We're here to help. Reach out to us through any of the following channels.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2F6A9E] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Company Name</h3>
                  <p className="text-gray-600">Mayank Varshney & Co.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2F6A9E] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">Shop No. FF 05, Rise Retailia 1<br />Plot No. SC 01, Sector 1<br />Greater Noida West<br />Gautam Buddha Nagar<br />Uttar Pradesh - 201306</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2F6A9E] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:care@mayankvarshney.com" className="text-[#2F6A9E] hover:underline">care@mayankvarshney.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2F6A9E] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <a href="tel:+919999117576" className="text-[#2F6A9E] hover:underline">+91 9999117576</a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition" placeholder="Enter your full name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition" placeholder="Enter your email address" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition" placeholder="Enter your phone number" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition">
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Accounting Services">Accounting Services</option>
                  <option value="GST Services">GST Services</option>
                  <option value="ITR/TDS Services">ITR/TDS Services</option>
                  <option value="MCA Services">MCA Services</option>
                  <option value="DGFT Services">DGFT Services</option>
                  <option value="Legal Drafting">Legal Drafting</option>
                  <option value="Registration Services">Registration Services</option>
                  <option value="Compliance Services">Compliance Services</option>
                  <option value="Investment Advisory">Investment Advisory</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#009966] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#1a4a75] transition-colors duration-300 shadow-md hover:shadow-lg">Send Message</button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
            <div className="p-2">
              <h3 className="font-semibold text-gray-800 mb-4">Our Location</h3>
            </div>
            <div className="h-full" style={{ height: 'calc(100% - 3rem)' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5666666666667!2d77.4914!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea8b0e0e0e0e%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjknMzMuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mayank Varshney & Co. Location"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Contact