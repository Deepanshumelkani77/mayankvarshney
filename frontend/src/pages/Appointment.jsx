import React, { useState } from 'react'

const mainItems = [
  { id: 'Accounting', label: 'Accounting', desc: 'Bookkeeping, financial statements, payroll and reconciliations.', groups: [
    { title: 'Onsite', items: ["Day to Day Onsite Accounting","Weekly Onsite Accounting","Monthly Onsite Accounting","Quarterly Onsite Accounting","Yearly Onsite Accounting","Payroll Services"] },
    { title: 'Offsite', items: ["Day to Day Offsite Accounting","Weekly Offsite Accounting","Monthly Offsite Accounting","Quarterly Offsite Accounting","Yearly Offsite Accounting","Payroll Services"] },
    { title: 'Asset Management', items: ["Fixed Assets Tagging","Fixed Asset Valuation","Inventory Valuation"] }
  ] },
  { id: 'ITR / TDS', label: 'ITR / TDS', desc: 'Income tax returns and compliance.', groups:[
    { title: 'IncomeTax_ITR', items: ['ITR 1','ITR 2','ITR 3','ITR 4','ITR 5','ITR 6','ITR 7','PAN Reissue Application','New PAN Application','ITR Revision','Tax Planning','Reply to Notices by IT Deptt.'  ] },
    { title: 'IncomeTax_Assessments', items:['Assessment U/S 143','Assessment U/S 147']},
    {title:'IncomeTax_TDS',items:['TDS on Salary return Filing (24Q)','Correction/Revision in Salary TDS Return  filings (24Q)','TDS other than Salary return Filing (26Q)','Correction/Revision in other than Salary TDS filings (26Q)','TDS on Sale of Property by Resident (26QB)','Correction/Revision on Sale of Property TDS filings by Resident (26QB)','TDS on Rent of Property (26QC)','Correction/Revision on TDS on rent of Property (26QC)','Obtaining Lower rate of TDS on Sale of Property by Non Resident ','Correction/Revision on TDS on Sale of Property by Non Resident ','TAN Application']}
  ] },
  { id: 'GST', label: 'GST', desc: 'GST registration, returns, and compliance.', groups:[
    {title:'GST Registration',items:['GSTIN Registrations']},
    {title:'Return Filing',items:['GST Monthly Return','GST Quarterly Return','GST Annual Return']},
    {title:'Assessment ',items:['GST Assessment','GSTIN Cancellation','GST LUT Application Filing','Reply to Notices']}
  ] },
  { id: 'MCA', label: 'MCA', desc: 'Company filings, annual returns and compliance.', groups:[
    {title:'Incorporation',items:['Private Limited Company Incorporaton','Public Limited Company Incorporation','Section 8 Company Incorporation','Nidhi Company Incorporation','Producer Company Incorporation','Limited Liability Partnership (LLP) Incorporation','Commencement Certificate',]},
    {title:'Change Filings',items:['Change of Registered Address','Appointment of Director','Resignation of Director','Increase in Authorised Capital','Transfer of Shares','Amendment in Memorandum of Association','Amendment in Articles of Association','Change of Company Name']},
    {title:'Annual Returns',items:['Annual Return Filing (AOC 4, MGT 7)','Directors Report','DIN Application','DIN Cancellation','Directors KYC']},
    {title:'Closure',items:['Winding Up of a Private Limited Company','Winding Up of a Public Limited Company','Winding Up of a Section 8 Company','Winding Up of a Nidhi Company ','Winding Up of a Producer Company','Winding Up of a Limited Liability Partnership (LLP)']}
  ]},
  { id: 'DGFT', label: 'DGFT', desc: 'DGFT registration, returns, and compliance.', groups:[
   {title:'Registration',items:['Import Export Code']},
   {title:'Assessment',items:['Assessment']},
   {title:'Refund',items:['Refund','SAD Refund']}
  ]},
  { id: 'Legal Drafting', label: 'Legal Drafting', desc: 'Legal document preparation and review.', groups:[
    {title:'PROPERTY MATTERS',items:['Property Registration','Property Title Verification','Gift Deed','Sale Deed','Rent Agreement','Lease Deed','Relinquishment Deed']},
    { title: 'WILL & POWER OF ATTORNEY (POA)', subgroups: [
            { title: 'POWER OF ATTORNEY (POA)', items: ['General Power of Attorney (GPA)','Special Power Of Attorney (SPOA)'] },
      { title: 'WILL', items: ['Will Drafting','Will Registration','Will Probate'] },
    ] },
    {title:'AGREEMENTS DRAFTING',items:['Memorandum Of Understanding','Franchise Agreement','Joint Venture Agreement','Founders Agreement','Shareholders Agreement','Share Purchase Agreement','Consultancy Agreement','Freelancer Agreement','Agency Agreement','Non Disclosure Agreement']},
    {title:'OTHERS',items:['Account Opening Resolution','Website Terms And Conditions','Website Privacy Policy','Website Disclaimer Policy','Appointment Letter','Resignation Letter','Offer Letter']}
  ] },
  { id: 'Registration', label: 'Registration', desc: 'Business registration and compliance.', groups:[
    {title:'Business Registrations',items:['GSTIN Registrations','MSME Registration','FSSAI Registration','PF Registration','ESI Registration','TAN Registration','IEC Registration','APEDA Registration','Shop & Establishment Registration','Society Registration','Club Registration','Trust Registration','Partnership Registration','BIS Registration']},
    {title:'Property related Registrations',items:['RERA Registration','Property Registration','Gift Deed Registration','Sale Deed Registration','Gift Deed Registration','Sale Deed Registration','Lease Deed Registration','Relinquishment Deed Registration','Will Probate','General Power of Attorney (GPA) Registration']},
    {title:'Other Registrations',items:['Agreement Registration','Bar Code Registration','Digital Signature Certificate']},
  ] },
  { id: 'Compliance', label: 'Compliance', desc: 'Regulatory compliance and reporting.', options: ['Annual Compliance', 'Quarterly Reporting'] },
  { id: 'Investment', label: 'Investment', desc: 'Investment advisory and planning.', options: ['Financial Planning', 'Investment Analysis'] },
]

const Appointment = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubService, setSelectedSubService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Appointment booked:', {
      category: selectedCategory,
      subService: selectedSubService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    alert('Appointment booked successfully!')
    setSelectedCategory('')
    setSelectedSubService('')
    setSelectedDate('')
    setSelectedTime('')
    setFormData({ name: '', email: '', phone: '', notes: '' })
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  const getSubServices = () => {
    if (!selectedCategory) return []
    const category = mainItems.find(item => item.id === selectedCategory)
    if (!category) return []
    
    let allSubServices = []
    if (category.groups) {
      category.groups.forEach(group => {
        if (group.items) {
          group.items.forEach(item => {
            allSubServices.push({ name: item, group: group.title })
          })
        }
        if (group.subgroups) {
          group.subgroups.forEach(subgroup => {
            subgroup.items.forEach(item => {
              allSubServices.push({ name: item, group: subgroup.title })
            })
          })
        }
      })
    }
    if (category.options) {
      category.options.forEach(opt => {
        allSubServices.push({ name: opt, group: 'General' })
      })
    }
    return allSubServices
  }

  const getDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
      })
    }
    return dates
  }

  const getCategoryInfo = (categoryId) => {
    return mainItems.find(item => item.id === categoryId)
  }

  return (
    <div className="bg-[#E5F0E5] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100">Book Your Appointment</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Schedule Your Consultation</h2>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Service Category Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Service Category</h3>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
                    setSelectedSubService('')
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition appearance-none bg-white cursor-pointer"
                  required
                >
                  <option value="">Choose a service category</option>
                  {mainItems.map(item => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Category Description */}
              {selectedCategory && (
                <div className="mt-4 p-4 bg-[#2F6A9E]/10 rounded-lg animate-fadeIn">
                  <p className="text-lg text-gray-700">{getCategoryInfo(selectedCategory)?.desc}</p>
                </div>
              )}
            </div>

            {/* Sub-Service Selection */}
            {selectedCategory && (
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Specific Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                  {getSubServices().map((subService, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedSubService(subService.name)}
                      className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all group ${
                        selectedSubService === subService.name
                          ? 'border-[#2F6A9E] bg-[#2F6A9E]/5'
                          : 'border-gray-200 hover:border-[#2F6A9E] hover:bg-[#2F6A9E]/5'
                      }`}
                    >
                      <p className="text-lg font-medium text-gray-800">{subService.name}</p>
                      <p className="text-sm text-gray-500 mt-1">{subService.group}</p>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-[#053131] rounded-lg p-3 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-white text-xs text-center">{subService.name}</p>
                        <p className="text-[#2F6A9E] text-xs text-center mt-1">{subService.group}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Date & Time Selection */}
            {selectedSubService && (
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Date & Time</h3>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">Choose Date</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {getDates().map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => setSelectedDate(date.value)}
                        className={`p-3 rounded-lg border-2 transition-all text-center ${
                          selectedDate === date.value
                            ? 'border-[#2F6A9E] bg-[#2F6A9E] text-white'
                            : 'border-gray-200 hover:border-[#2F6A9E] hover:bg-[#2F6A9E]/5'
                        }`}
                      >
                        <div className="text-sm font-medium">{date.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Choose Time Slot</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all font-medium text-sm ${
                          selectedTime === time
                            ? 'border-[#2F6A9E] bg-[#2F6A9E] text-white'
                            : 'border-gray-200 hover:border-[#2F6A9E] hover:bg-[#2F6A9E]/5 text-gray-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* User Details */}
            {selectedSubService && selectedDate && selectedTime && (
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Details</h3>
                
                {/* Booking Summary */}
                <div className="mb-6 p-4 bg-[#2F6A9E]/10 rounded-lg">
                  <p className="text-lg text-gray-600">Category: <span className="font-semibold text-[#2F6A9E]">{selectedCategory}</span></p>
                  <p className="text-lg text-gray-600">Service: <span className="font-semibold text-[#2F6A9E]">{selectedSubService}</span></p>
                  <p className="text-lg text-gray-600">Date: <span className="font-semibold text-[#2F6A9E]">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</span></p>
                  <p className="text-lg text-gray-600">Time: <span className="font-semibold text-[#2F6A9E]">{selectedTime}</span></p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition resize-none"
                      placeholder="Any additional information you'd like to share"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {selectedSubService && selectedDate && selectedTime && formData.name && formData.email && formData.phone && (
              <div className="animate-fadeIn">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Confirm Appointment Booking
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Appointment
