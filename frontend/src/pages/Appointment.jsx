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
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedSubHeading, setSelectedSubHeading] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTimes, setSelectedTimes] = useState([])
  const [requestCustomTime, setRequestCustomTime] = useState(false)
  const [customTimeRequest, setCustomTimeRequest] = useState('')
  const [notSureAboutService, setNotSureAboutService] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredSubHeading, setHoveredSubHeading] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [timeMenuOpen, setTimeMenuOpen] = useState(false)
  const [countryCode, setCountryCode] = useState('+91')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  })

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ]

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' }
  ]

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return timeSlots

    const now = new Date()
    const selectedDateObj = new Date(selectedDate)

    // If selected date is in the future, show all time slots
    if (selectedDateObj > now) {
      return timeSlots
    }

    // If selected date is today, filter out past time slots
    const availableSlots = timeSlots.filter(time => {
      const [timeStr, period] = time.split(' ')
      const [hours, minutes] = timeStr.split(':').map(Number)

      let hours24 = hours
      if (period === 'PM' && hours !== 12) {
        hours24 += 12
      } else if (period === 'AM' && hours === 12) {
        hours24 = 0
      }

      const slotTime = new Date()
      slotTime.setHours(hours24, minutes, 0, 0)

      return slotTime > now
    })

    return availableSlots
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Proceeding to payment for appointment:', {
      category: selectedCategory,
      subHeading: selectedSubHeading,
      items: selectedItems,
      date: selectedDate,
      times: selectedTimes,
      requestCustomTime,
      customTimeRequest,
      notSureAboutService,
      countryCode,
      ...formData
    })
    alert('Please proceed to payment to confirm your appointment.')
    // TODO: Implement payment flow
    // For now, we'll keep the existing logic but change the message
    // In production, this would redirect to a payment page or open a payment modal
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
    const index = selectedItems.indexOf(item)
    if (index === -1) {
      // Add item
      setSelectedItems([...selectedItems, item])
      if (!selectedCategory.includes(category)) {
        setSelectedCategory([...selectedCategory, category])
      }
      if (subHeading && !selectedSubHeading.includes(subHeading)) {
        setSelectedSubHeading([...selectedSubHeading, subHeading])
      }
    } else {
      // Remove item
      setSelectedItems(selectedItems.filter(i => i !== item))
      // Remove category if no items from this category remain
      const remainingItems = selectedItems.filter(i => i !== item)
      const categoryItems = mainItems.find(c => c.id === category)
      if (categoryItems) {
        const hasItemsFromCategory = categoryItems.groups?.some(g =>
          g.items?.some(i => remainingItems.includes(i)) ||
          g.subgroups?.some(s => s.items?.some(i => remainingItems.includes(i)))
        ) || categoryItems.options?.some(i => remainingItems.includes(i))
        if (!hasItemsFromCategory) {
          setSelectedCategory(selectedCategory.filter(c => c !== category))
        }
      }
      // Remove subheading if no items from this subheading remain
      if (subHeading) {
        const hasItemsFromSubheading = mainItems.some(c =>
          c.groups?.some(g =>
            (g.title === subHeading && g.items?.some(i => remainingItems.includes(i))) ||
            g.subgroups?.some(s =>
              (s.title === subHeading && s.items?.some(i => remainingItems.includes(i)))
            )
          )
        )
        if (!hasItemsFromSubheading) {
          setSelectedSubHeading(selectedSubHeading.filter(s => s !== subHeading))
        }
      }
    }
    setMenuOpen(false)
    setHoveredCategory(null)
    setHoveredSubHeading(null)
  }

  const handleTimeSlotToggle = (time) => {
    const index = selectedTimes.indexOf(time)
    const timeIndex = timeSlots.indexOf(time)

    if (index === -1) {
      // Add time slot - must be adjacent to existing slots or first selection
      if (selectedTimes.length === 0) {
        // First selection - allow any slot
        setSelectedTimes([time])
      } else {
        // Check if adjacent to any selected slot
        const isAdjacent = selectedTimes.some(selectedTime => {
          const selectedIndex = timeSlots.indexOf(selectedTime)
          return Math.abs(selectedIndex - timeIndex) === 1
        })

        if (isAdjacent) {
          // Add the slot and sort to maintain order
          const newSelected = [...selectedTimes, time].sort((a, b) => timeSlots.indexOf(a) - timeSlots.indexOf(b))
          setSelectedTimes(newSelected)
        } else {
          // Not adjacent - don't allow selection
          alert('Please select continuous time slots only.')
        }
      }
    } else {
      // Remove time slot - ensure remaining slots are continuous
      const newSelected = selectedTimes.filter(t => t !== time)

      if (newSelected.length === 0) {
        setSelectedTimes([])
      } else {
        // Check if remaining slots are continuous
        const indices = newSelected.map(t => timeSlots.indexOf(t)).sort((a, b) => a - b)
        let isContinuous = true

        for (let i = 0; i < indices.length - 1; i++) {
          if (indices[i + 1] - indices[i] !== 1) {
            isContinuous = false
            break
          }
        }

        if (isContinuous) {
          setSelectedTimes(newSelected)
        } else {
          // Not continuous - keep only the segment that includes the clicked slot's neighbors
          // Find the segment that would remain continuous
          const clickedIndex = timeIndex
          const segments = []
          let currentSegment = []

          for (let i = 0; i < indices.length; i++) {
            if (currentSegment.length === 0) {
              currentSegment.push(indices[i])
            } else if (indices[i] - currentSegment[currentSegment.length - 1] === 1) {
              currentSegment.push(indices[i])
            } else {
              segments.push([...currentSegment])
              currentSegment = [indices[i]]
            }
          }
          if (currentSegment.length > 0) {
            segments.push(currentSegment)
          }

          // Keep the segment closest to the clicked slot
          let closestSegment = segments[0]
          let minDistance = Math.abs(clickedIndex - segments[0][0])

          for (const segment of segments) {
            const distance = Math.min(
              Math.abs(clickedIndex - segment[0]),
              Math.abs(clickedIndex - segment[segment.length - 1])
            )
            if (distance < minDistance) {
              minDistance = distance
              closestSegment = segment
            }
          }

          const continuousSlots = closestSegment.map(idx => timeSlots[idx])
          setSelectedTimes(continuousSlots)
        }
      }
    }
  }

  const handleTimeSlotRange = (startTime, endTime) => {
    const startIndex = timeSlots.indexOf(startTime)
    const endIndex = timeSlots.indexOf(endTime)
    
    if (startIndex === -1 || endIndex === -1) return
    
    const start = Math.min(startIndex, endIndex)
    const end = Math.max(startIndex, endIndex)
    
    const range = timeSlots.slice(start, end + 1)
    setSelectedTimes(range)
  }

  return (
    <div className="bg-[#E5F0E5] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100 text-center">Book Your Appointment</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2 py-2">
        <div className="grid lg:grid-cols-4 gap-3">
          {/* Left Column - Appointment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 pt-3 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Appointment Summary
              </h3>
              
              <div className="space-y-4">
                {/* Selected Services */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-xs text-gray-500 mb-2">Selected Services</p>
                  {selectedItems.length > 0 || notSureAboutService ? (
                    <div className="space-y-2">
                      {selectedItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-sm text-gray-800">{item}</p>
                        </div>
                      ))}
                      {notSureAboutService && (
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-sm text-gray-800">I am not sure about the Service</p>
                        </div>
                      )}
                      <button
                        onClick={() => setMenuOpen(true)}
                        className="mt-2 text-sm text-[#2F6A9E] font-medium hover:underline flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add more services
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic">No services selected</p>
                  )}
                </div>

                {/* Date & Time */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-xs text-gray-500 mb-2">Date & Time</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-800">
                        {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : 'Not selected'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-800">
                        {requestCustomTime && customTimeRequest ? customTimeRequest : selectedTimes.length > 0 ? selectedTimes.join(', ') : 'Not selected'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-xs text-gray-500 mb-2">Contact Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm text-gray-800">{formData.firstName || ''} {formData.lastName || ''}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-800">{formData.email || 'Not provided'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2F6A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-sm text-gray-800">{formData.phone || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                {formData.notes && (
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-xs text-gray-500 mb-2">Additional Notes</p>
                    <p className="text-sm text-gray-800">{formData.notes}</p>
                  </div>
                )}

              
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleFormSubmit} className="">
              <div className="bg-white shadow-lg p-3 rounded-xl">
               

                <div className="space-y-4">
                  {/* Row 1: Service, Date, Time Slot, Custom Time */}
                  <div className="grid md:grid-cols-4 gap-4">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        Services
                      </label>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setMenuOpen(!menuOpen)}
                          className="w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition bg-gray-50 focus:bg-white text-left flex justify-between items-center text-base"
                        >
                          <span>{selectedItems.length > 0 ? `Add more services` : 'Choose services'}</span>
                          <svg className={`w-5 h-5 text-gray-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {menuOpen && (
                          <div className="absolute z-50 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                            <div className="flex">
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

                              {hoveredCategory && (
                                <div className="w-1/3 border-r border-gray-200">
                                  <div className="p-2">
                                    {getCategoryInfo(hoveredCategory).options ? (
                                      // Show options directly if category has options
                                      getCategoryInfo(hoveredCategory).options.map((option, index) => (
                                        <div
                                          key={index}
                                          onClick={() => handleSelectItem(option, null, hoveredCategory)}
                                          className={`px-4 py-3 rounded-lg cursor-pointer transition-colors flex items-center justify-between ${
                                            selectedItems.includes(option)
                                              ? 'bg-[#2F6A9E] text-white'
                                              : 'hover:bg-[#2F6A9E] hover:text-white text-gray-800'
                                          }`}
                                        >
                                          <p className="font-medium text-sm">{option}</p>
                                          {selectedItems.includes(option) && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                          )}
                                        </div>
                                      ))
                                    ) : (
                                      // Show sub-headings if category has groups
                                      getSubHeadings(hoveredCategory).map((subHeading, index) => (
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
                                      ))
                                    )}
                                  </div>
                                </div>
                              )}

                              {hoveredCategory && hoveredSubHeading && (
                                <div className="w-1/3">
                                  <div className="p-2">
                                    {getItems(hoveredCategory, hoveredSubHeading).map((item, index) => (
                                      <div
                                        key={index}
                                        onClick={() => handleSelectItem(item, hoveredSubHeading, hoveredCategory)}
                                        className={`px-4 py-3 rounded-lg cursor-pointer transition-colors flex items-center justify-between ${
                                          selectedItems.includes(item)
                                            ? 'bg-[#2F6A9E] text-white'
                                            : 'hover:bg-[#2F6A9E] hover:text-white text-gray-800'
                                        }`}
                                      >
                                        <p className="font-medium text-sm">{item}</p>
                                        {selectedItems.includes(item) && (
                                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notSureAboutService}
                            onChange={(e) => setNotSureAboutService(e.target.checked)}
                            className="w-4 h-4 text-[#2F6A9E] rounded focus:ring-2 focus:ring-[#2F6A9E] focus:ring-offset-0"
                          />
                          <span className="text-sm text-gray-600">I am not sure about the Service</span>
                        </label>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Date *
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        disabled={selectedItems.length === 0 && !notSureAboutService}
                        className={`w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base ${
                          selectedItems.length === 0 && !notSureAboutService ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                        }`}
                      />
                    </div>

                    {/* Time Slot Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Time Slot *
                      </label>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setTimeMenuOpen(!timeMenuOpen)}
                          disabled={selectedDate === ''}
                          className={`w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-left flex justify-between items-center text-base ${
                            selectedDate === '' ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                          }`}
                        >
                          <span>{selectedTimes.length > 0 ? `${selectedTimes.length} selected` : 'Choose time'}</span>
                          <svg className={`w-5 h-5 text-gray-400 transition-transform ${timeMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {timeMenuOpen && (
                          <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-3">
                            <p className="text-xs text-gray-500 mb-2">Click to toggle, Shift+Click for range selection</p>
                            <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                              {getAvailableTimeSlots().map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={(e) => {
                                    if (e.shiftKey && selectedTimes.length > 0) {
                                      handleTimeSlotRange(selectedTimes[selectedTimes.length - 1], time)
                                    } else {
                                      handleTimeSlotToggle(time)
                                    }
                                  }}
                                  className={`p-2 rounded-lg border-2 transition-all font-medium text-xs ${
                                    selectedTimes.includes(time)
                                      ? 'border-[#2F6A9E] bg-[#2F6A9E] text-white'
                                      : 'border-gray-200 hover:border-[#2F6A9E] hover:bg-[#2F6A9E]/5 text-gray-800'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t">
                              <button
                                type="button"
                                onClick={() => setTimeMenuOpen(false)}
                                className="w-full px-4 py-2 bg-[#2F6A9E] text-white rounded-lg font-medium hover:bg-[#1a4a75] transition"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Custom Time Request */}
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer ">
                        <input
                          type="checkbox"
                          checked={requestCustomTime}
                          onChange={(e) => setRequestCustomTime(e.target.checked)}
                          disabled={selectedDate === ''}
                          className="w-4 h-4 text-[#2F6A9E] border-gray-300 rounded focus:ring-[#2F6A9E]"
                        />
                        <span className={`text-sm ${selectedDate === '' ? 'text-gray-400' : 'text-gray-700'}`}>Request custom time</span>
                      </label>
                      {requestCustomTime && (
                        <input
                          type="text"
                          value={customTimeRequest}
                          onChange={(e) => setCustomTimeRequest(e.target.value)}
                          placeholder="Preferred time"
                          className="w-full h-10 mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-sm bg-gray-50 focus:bg-white"
                        />
                      )}
                    </div>
                  </div>

                  {/* Row 2: First Name, Last Name, Email, Phone */}
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                     
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        disabled={(selectedTimes.length === 0 && !requestCustomTime)}
                        className={`w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base ${
                          (selectedTimes.length === 0 && !requestCustomTime) ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                        }`}
                        placeholder="First name"
                      />
                    </div>

                    <div>
                     
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        disabled={(selectedTimes.length === 0 && !requestCustomTime)}
                        className={`w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base ${
                          (selectedTimes.length === 0 && !requestCustomTime) ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                        }`}
                        placeholder="Last name"
                      />
                    </div>

                    <div>
                   
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        disabled={(selectedTimes.length === 0 && !requestCustomTime)}
                        className={`w-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base ${
                          (selectedTimes.length === 0 && !requestCustomTime) ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                        }`}
                        placeholder="Email"
                      />
                    </div>

                    <div>
                    
                      <div className="relative">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          disabled={(selectedTimes.length === 0 && !requestCustomTime)}
                          className={`absolute left-0 top-0 h-10 px-3  border border-gray-300 bg-gray-50 focus:bg-white rounded-l-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base z-10 appearance-none cursor-pointer ${
                            (selectedTimes.length === 0 && !requestCustomTime) ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                          }`}
                          style={{ width: '70px' }}
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '')
                            setFormData({ ...formData, phone: value })
                          }}
                          disabled={(selectedTimes.length === 0 && !requestCustomTime)}
                          className={`w-full h-10 pl-30 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition text-base ${
                            (selectedTimes.length === 0 && !requestCustomTime) ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 focus:bg-white'
                          }`}
                          placeholder="Phone number"
                          maxLength={15}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      rows={1}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F6A9E] focus:border-transparent outline-none transition resize-none text-base bg-gray-50 focus:bg-white"
                      placeholder="Any additional information or special requirements"
                    ></textarea>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4">
                   <button
                      type="submit"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Pay Appointment Fee
                    </button>
                    <button
                      type="button"
                     
                      className="flex-1 px-6 py-4 bg-[#009966] border-2 border-[#009966] text-white rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md text-base flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Book Appointment
                    </button>
                   
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
