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
  const [selectedSubHeading, setSelectedSubHeading] = useState('')
  const [selectedItem, setSelectedItem] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredSubHeading, setHoveredSubHeading] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
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
      subHeading: selectedSubHeading,
      item: selectedItem,
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    alert('Appointment booked successfully!')
    setSelectedCategory('')
    setSelectedSubHeading('')
    setSelectedItem('')
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

  const getCategoryInfo = (categoryId) => {
    return mainItems.find(item => item.id === categoryId)
  }

  const getSubHeadings = (categoryId) => {
    if (!categoryId) return []
    const category = mainItems.find(item => item.id === categoryId)
    if (!category || !category.groups) return []
    
    let subHeadings = []
    category.groups.forEach(group => {
      subHeadings.push(group.title)
      if (group.subgroups) {
        group.subgroups.forEach(subgroup => {
          subHeadings.push(subgroup.title)
        })
      }
    })
    return [...new Set(subHeadings)]
  }

  const getItems = (categoryId, subHeadingTitle) => {
    if (!categoryId || !subHeadingTitle) return []
    const category = mainItems.find(item => item.id === categoryId)
    if (!category || !category.groups) return []
    
    let items = []
    category.groups.forEach(group => {
      if (group.title === subHeadingTitle && group.items) {
        items = [...items, ...group.items]
      }
      if (group.subgroups) {
        group.subgroups.forEach(subgroup => {
          if (subgroup.title === subHeadingTitle && subgroup.items) {
            items = [...items, ...subgroup.items]
          }
        })
      }
    })
    return items
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

  const handleSelectItem = (item, subHeading, category) => {
    setSelectedItem(item)
    setSelectedSubHeading(subHeading)
    setSelectedCategory(category)
    setMenuOpen(false)
    setHoveredCategory(null)
    setHoveredSubHeading(null)
  }

  return (
    <div className="bg-[#E5F0E5] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100 text-center">Book Your Appointment</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Summary Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Appointment Summary</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Service Category</p>
                  <p className="text-base font-semibold text-[#2F6A9E]">{selectedCategory || 'Not selected'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Sub-Heading</p>
                  <p className="text-base font-semibold text-[#2F6A9E]">{selectedSubHeading || 'Not selected'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Service Item</p>
                  <p className="text-base font-semibold text-[#2F6A9E]">{selectedItem || 'Not selected'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Date</p>
                  <p className="text-base font-semibold text-[#2F6A9E]">
                    {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }) : 'Not selected'}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Time</p>
                  <p className="text-base font-semibold text-[#2F6A9E]">{selectedTime || 'Not selected'}</p>
                </div>
                
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-500 font-medium">Name</p>
                  <p className="text-base font-semibold text-gray-800">{formData.name || 'Not filled'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-base font-semibold text-gray-800">{formData.email || 'Not filled'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-base font-semibold text-gray-800">{formData.phone || 'Not filled'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Service Selection - Mega Menu */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Service</h3>
                
                {/* Service Selection Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition bg-white text-left flex justify-between items-center text-base"
                  >
                    <span>{selectedItem || 'Choose a service'}</span>
                    <svg className={`w-5 h-5 text-gray-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  {menuOpen && (
                    <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                      <div className="flex">
                        {/* Categories Column */}
                        <div className="w-1/3 border-r border-gray-200 bg-gray-50">
                          <div className="p-2">
                            {mainItems.map((item) => (
                              <div
                                key={item.id}
                                onMouseEnter={() => {
                                  setHoveredCategory(item.id)
                                  setHoveredSubHeading(null)
                                }}
                                onClick={() => {
                                  setHoveredCategory(item.id)
                                  setHoveredSubHeading(null)
                                }}
                                className={`px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                                  hoveredCategory === item.id ? 'bg-[#2F6A9E] text-white' : 'hover:bg-gray-200 text-gray-800'
                                }`}
                              >
                                <p className="font-medium text-sm">{item.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sub-Headings Column */}
                        {hoveredCategory && (
                          <div className="w-1/3 border-r border-gray-200">
                            <div className="p-2 max-h-64 overflow-y-auto">
                              {getSubHeadings(hoveredCategory).map((subHeading, index) => (
                                <div
                                  key={index}
                                  onMouseEnter={() => setHoveredSubHeading(subHeading)}
                                  onClick={() => setHoveredSubHeading(subHeading)}
                                  className={`px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                                    hoveredSubHeading === subHeading ? 'bg-[#2F6A9E] text-white' : 'hover:bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  <p className="font-medium text-sm">{subHeading}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Items Column */}
                        {hoveredCategory && hoveredSubHeading && (
                          <div className="w-1/3">
                            <div className="p-2 max-h-64 overflow-y-auto">
                              {getItems(hoveredCategory, hoveredSubHeading).map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSelectItem(item, hoveredSubHeading, hoveredCategory)}
                                  className="px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-[#2F6A9E] hover:text-white text-gray-800"
                                >
                                  <p className="font-medium text-sm">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Date Selection */}
              {selectedItem && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Date</h3>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Time Selection */}
              {selectedDate && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Time Slot</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border-2 transition-all font-medium text-xs ${
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
              )}

              {/* User Details */}
              {selectedTime && (
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Details</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleFormChange}
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition resize-none text-base"
                        placeholder="Any additional information"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {formData.name && formData.email && formData.phone && (
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all shadow-lg hover:shadow-xl text-base"
                >
                  Confirm Appointment Booking
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
