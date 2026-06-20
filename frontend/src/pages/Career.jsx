import React, { useState } from 'react'

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    location: '',
    familyBackground: '',
    coverLetter: '',
    resume: null
  })

  // Placeholder job data - this will be replaced with dynamic data from database
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Accountant',
      department: 'Finance',
      location: 'Greater Noida West',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹6,00,000 - ₹9,00,000 per annum',
      benefits: 'Health Insurance, PF, ESIC, Performance Bonus, Paid Leave',
      description: 'We are looking for an experienced Senior Accountant to join our team. The ideal candidate will have strong knowledge of accounting principles, tax regulations, and financial reporting.',
      responsibilities: [
        'Prepare financial statements and reports',
        'Manage accounts payable and receivable',
        'Ensure compliance with tax regulations',
        'Conduct financial audits',
        'Provide financial analysis and recommendations'
      ],
      requirements: [
        'CA/ICWA/MBA Finance with 3-5 years experience',
        'Strong knowledge of Tally, GST, and Income Tax',
        'Excellent analytical and problem-solving skills',
        'Good communication and interpersonal skills'
      ],
      postedDate: '2024-06-10'
    },
    {
      id: 2,
      title: 'Tax Consultant',
      department: 'Taxation',
      location: 'Greater Noida West',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹5,00,000 - ₹8,00,000 per annum',
      benefits: 'Health Insurance, PF, ESIC, Performance Bonus, Paid Leave',
      description: 'Join our taxation team as a Tax Consultant. You will be responsible for providing tax advisory services, preparing tax returns, and ensuring compliance with tax laws.',
      responsibilities: [
        'Prepare and file income tax returns',
        'Provide tax planning and advisory services',
        'Handle GST compliance and filing',
        'Represent clients before tax authorities',
        'Stay updated with changes in tax laws'
      ],
      requirements: [
        'CA/CS/Law graduate with 2-4 years experience',
        'Strong knowledge of Income Tax and GST',
        'Experience in tax planning and compliance',
        'Excellent client communication skills'
      ],
      postedDate: '2024-06-08'
    },
    
  ]


  const handleApply = (job) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // This will be replaced with API call to submit application
    console.log('Application submitted:', { ...formData, job: selectedJob })
    alert('Application submitted successfully! We will review your application and get back to you soon.')
    setShowApplicationForm(false)
    setSelectedJob(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      education: '',
      location: '',
      familyBackground: '',
      coverLetter: '',
      resume: null
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100 text-center">Build Your Career With Us</p>
        
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
            <div className="bg-gradient-to-r from-[#053131] to-[#0a4a4a] text-white px-6 py-4 rounded-t-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">Apply for {selectedJob.title}</h2>
                  <p className="text-sm text-blue-100 mt-1">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="3 years"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Education *</label>
                  <input
                    type="text"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder="B.Com, M.Com, CA, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Family Background</label>
                <textarea
                  name="familyBackground"
                  rows={2}
                  value={formData.familyBackground}
                  onChange={handleInputChange}
                  placeholder="Brief information about your family background..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  rows={2}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Brief description about yourself..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF) *</label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    required
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2F6A9E] file:text-white hover:file:bg-[#245a80]"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#2F6A9E] text-white px-4 py-2.5 rounded-md font-medium hover:bg-[#245a80] transition-colors text-sm"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-medium hover:bg-gray-300 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     

      {/* Current Job Openings Section */}
      <div className="py-16 pt-8 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Current Job Openings</h2>
            
          </div>
          
          {jobOpenings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No current job openings available. Please check back later.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#2F6A9E] mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Posted: {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleApply(job)}
                      className="bg-[#2F6A9E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#245a80] transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                  
                  {/* Job Details */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <p className="text-gray-600">{job.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

 
    </div>
  )
}

export default Career
