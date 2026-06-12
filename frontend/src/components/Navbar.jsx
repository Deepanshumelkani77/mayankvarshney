import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from "../assets/assets";

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




]

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const { openSignup } = useContext(AppContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef(null)
  const topbarRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topMenuOpen, setTopMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hoveredColumn, setHoveredColumn] = useState(null)
  const [hoveredGroup, setHoveredGroup] = useState(null)
  const hoverTimeoutRef = useRef(null)
  const [itrOffset, setItrOffset] = useState(0)
  const [spacerHeight, setSpacerHeight] = useState(0)
  const topMenuRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
      if (topMenuRef.current && !topMenuRef.current.contains(e.target)) {
        setTopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // dropdown scroll handler placeholder (no hover previews)
  useEffect(() => {
    // clear hoveredGroup when dropdown changes/closes
    setHoveredGroup(null)
    return () => { setHoveredGroup(null) }
  }, [openDropdown])

  function toggleDropdown(id) {
    setOpenDropdown(prev => (prev === id ? null : id))
  }

  useEffect(() => {
    const measure = () => {
      // ITR offset measurement
      if (openDropdown === 'ITR / TDS') {
        const el = document.querySelector('[data-item="ITR / TDS"]')
        if (el) {
          const rect = el.getBoundingClientRect()
          setItrOffset(Math.round(rect.left))
        }
      }
      // spacer height (topbar + main nav)
      const topH = topbarRef.current ? Math.round(topbarRef.current.getBoundingClientRect().height) : 0
      const navH = navRef.current ? Math.round(navRef.current.getBoundingClientRect().height) : 0
      setSpacerHeight(topH + navH)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [openDropdown])

  const handleItemHover = (item, column, group = null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredItem(item)
    setHoveredColumn(column)
    setHoveredGroup(group)
  }

  const handleItemLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
      setHoveredColumn(null)
      setHoveredGroup(null)
    }, 100)
  }

  return (
    <>
      {/* Top Navbar (fixed) */}
      <div
        ref={topbarRef}
        className={`fixed top-0 left-0 right-0 bg-[#053131] text-white transition-all duration-300 ${
          showTopBar ? 'h-14 opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
        } z-50`}
      >
        <div className="max-w-8xl mx-auto h-14 flex items-center justify-between px-4">
          {/* Left Side - Contact Icons */}
          <div className="flex items-center gap-4">
            <a href="tel:+919910060345" className="flex items-center gap-2 hover:text-[#2F6A9E] transition-colors group" title="Call Us">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
             
            </a>
            <a href="mailto:care@mayankvarshney.com" className="flex items-center gap-2 hover:text-[#2F6A9E] transition-colors group" title="Email Us">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              
            </a>
            <a href="https://wa.me/9910060345" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2F6A9E] transition-colors group" title="WhatsApp">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
             
            </a>
          </div>

          {/* Center - Blinking Text */}
          <div className="flex-1 text-center">
            <p className="text-base font-semibold animate-pulse text-white">
              🎉 Special Offer: Get 20% Off on First Consultation! 🎉
            </p>
          </div>

          {/* Right Side - Menu Button */}
          <div className="flex items-center gap-3">
            {/* Profile Icon */}
            <button
              onClick={() => openSignup('login')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              title="Login"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Menu Button */}
            <div className="relative" ref={topMenuRef}>
              <button
                onClick={() => setTopMenuOpen(!topMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              
              </button>

              {/* Dropdown Menu */}
              {topMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                  <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Home</Link>
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">About</Link>
                  <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Contact</Link>
                  <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Blog</Link>
                  <Link to="/career" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Career</Link>
                  <Link to="/review" className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Reviews</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar (fixed below topbar) */}
      <nav
        ref={navRef}
        onMouseLeave={() => setOpenDropdown(null)}
        className={`fixed left-0 right-0 bg-[#E5F0E5] shadow-md w-full transition-all duration-300 ${
          showTopBar ? 'top-14' : 'top-0'
        } z-40`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4">

         <div>
          <img src={assets.logo} alt="logo" className="h-14" />
         </div>

          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-1 font-medium flex-wrap px-2 text-base">
              {mainItems.map(item => (
                <li key={item.id} onMouseEnter={() => setOpenDropdown(item.id)} className="relative">
                  <button data-item={item.id} onClick={() => toggleDropdown(item.id)} className="px-4 py-2 hover:text-emerald-600 flex items-center gap-2 text-base">
                    <span>{item.label}</span>
                    <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/appointment" className="hidden md:inline bg-emerald-600 text-white px-5 py-2.5 rounded-md text-base font-medium">Book Appointment</Link>

            <button onClick={() => setMobileOpen(prev => !prev)} className="md:hidden p-2 rounded-md bg-white/10">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile collapsible menu */}
        <div className={`md:hidden bg-white text-black transition-[max-height] duration-300 overflow-hidden ${mobileOpen ? 'max-h-[80vh] py-4' : 'max-h-0'}`}>
          <div className="px-4">
            <ul className="space-y-2">
              {mainItems.map(item => (
                <li key={item.id} className="border-b last:border-b-0">
                  <button onClick={() => toggleDropdown(item.id)} className="w-full text-left px-3 py-2 flex justify-between items-center">
                    <span>{item.label}</span>
                    <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openDropdown === item.id && item.options && item.options.length > 0 ? (
                    <ul className="pl-4 pb-2 pt-1 space-y-1">
                      {item.options.map(opt => (
                        <li key={opt} className="text-base px-2 py-1.5 rounded hover:bg-gray-100">{opt}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown panel (single shared panel, content changes per openDropdown) */}
        <div className={`absolute left-0 right-0 top-20 z-40 mt-0 flex ${openDropdown === 'ITR / TDS' ? 'justify-start pl-4' : 'justify-center'} pointer-events-none`}>
          <div style={openDropdown === 'ITR / TDS' ? { marginLeft: `${itrOffset}px` } : {}} className={`${openDropdown === 'ITR / TDS' ? 'w-auto max-w-3xl' : 'w-[90vw] max-w-6xl'} bg-white text-black rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${openDropdown ? 'opacity-100 translate-y-2 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95'}`}>
            {openDropdown ? (
              (() => {
                const info = mainItems.find(i => i.id === openDropdown)
                // If groups provided, render each group as a column with its own heading
                if (info.groups && info.groups.length) {
                  // Special layout for ITR / TDS: vertical group list on left, details on right
                  if (info.id === 'ITR / TDS') {
                    return (
                      <div ref={dropdownRef} className="relative p-3">
                        <div className="flex items-start gap-3" onMouseLeave={() => setHoveredGroup(null)}>
                          {/* compact left list */}
                          <div className="w-60 bg-white p-1 rounded-md border-none ">
                            {info.groups.map((g) => (
                              <div key={g.title} className="mb-1">
                                <button
                                  onMouseEnter={() => setHoveredGroup(g.title)}
                                  className={`w-full text-left px-4 py-2.5 rounded-md transition-colors text-base ${hoveredGroup === g.title ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'}`}
                                >
                                  {g.title}
                                </button>
                              </div>
                            ))}
                          </div>

                          {/* details panel - appears to the right when hovering an option */}
                          <div className="relative">
                            {hoveredGroup && (() => {
                              const grp = info.groups.find(g => g.title === hoveredGroup)
                              return (
                                <div onMouseEnter={() => {/* keep hoveredGroup while inside panel */}} onMouseLeave={() => setHoveredGroup(null)} className="w-[720px] bg-white rounded-md p-2 border-none">
                                  <h4 className="font-semibold px-2 text-[#2F6A9E] mb-2 text-lg">{grp.title}</h4>
                                  <p className="text-base px-2 text-gray-600 mb-3">{info.desc}</p>
                                  <ul className="space-y-2   ">
                                    {grp.items.map(it => (
                                      <li key={it} className="px-2 py-1.5 rounded hover:bg-gray-50 text-base">{it}</li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            })()}
                          </div>
                        </div>
                      </div>
                    )
                  }
                  // generic groups layout for other items
                  return (
                    <div ref={dropdownRef} className="relative p-6 h-[50vh] max-h-[70vh] overflow-y-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {info.groups.map((g, gi) => (
                          <div 
                            key={gi} 
                            onMouseEnter={() => setHoveredColumn(gi)}
                            onMouseLeave={() => handleItemLeave()}
                          >
                            {g.subgroups ? (
                              g.subgroups.map((sg, sgi) => (
                                <div key={sgi} className="mb-4">
                                  <h4 className="font-semibold mb-2 text-base text-[#2F6A9E]">{sg.title}</h4>
                                  <ul className="space-y-2 flex flex-col">
                                    {sg.items.map(opt => (
                                      <li key={opt} className="relative">
                                        <div
                                          className="py-2.5 rounded hover:bg-gray-100 cursor-pointer text-base"
                                          onMouseEnter={() => handleItemHover(opt, gi, sg)}
                                          onMouseLeave={() => handleItemLeave()}
                                        >
                                          {opt}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            ) : (
                              <>
                                <h4 className="font-semibold mb-2 text-base text-[#2F6A9E]">{g.title}</h4>
                                <ul className="space-y-2 flex flex-col ">
                                  {g.items.map(opt => (
                                    <li key={opt} className="relative">
                                      <div 
                                        className="py-2.5 rounded hover:bg-gray-100 cursor-pointer text-base"
                                        onMouseEnter={() => handleItemHover(opt, gi)}
                                        onMouseLeave={() => handleItemLeave()}
                                      >
                                        {opt}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        ))}
                        {/* Empty 4th column for preview panel space */}
                        <div className="hidden md:block"></div>
                      </div>
                      {/* Preview panel - overlay positioned dynamically */}
                      <div className={`absolute bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200 shadow-2xl transition-all duration-500 ease-out z-10 ${hoveredItem ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'} ${hoveredColumn === 0 || hoveredColumn === 1 ? 'left-1/2 top-6 w-1/2' : (hoveredColumn === 2 || hoveredColumn === 3) ? 'left-0 top-6 w-1/2' : 'left-1/2 top-6 w-1/2'}`}>
                        <h4 className="font-semibold text-[#2F6A9E] mb-3 text-xl">{hoveredItem || ''}</h4>
                        <p className="text-base text-gray-600 mb-4">Professional service with expert guidance. We provide comprehensive support for this service with detailed documentation and expert consultation.</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Expert consultation</span>
                          </div>
                          <div className="flex items-center gap-2 text-base text-gray-700">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Timely delivery</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>24/7 support</span>
                          </div>
                        </div>
                        <button className="mt-4 w-full bg-emerald-600 text-white py-3 rounded-md text-base font-semibold hover:bg-emerald-700 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )
                }
                // fallback: split options into 3 columns
                const per = Math.ceil((info.options || []).length / 3) || 1
                const cols = [0,1,2].map(i => (info.options || []).slice(i*per, (i+1)*per))
                return (
                  <div ref={dropdownRef} className="relative p-6 max-h-[50vh] overflow-y-auto">
                    <h3 className="text-xl font-semibold text-center mb-4">{info.label}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {cols.map((col, ci) => (
                        <ul 
                          key={ci} 
                          className="space-y-2 flex flex-col items-center"
                          onMouseEnter={() => setHoveredColumn(ci)}
                          onMouseLeave={() => handleItemLeave()}
                        >
                          {col.map(opt => (
                            <li key={opt} className="relative">
                              <div 
                                className="px-3 py-2.5 rounded hover:bg-gray-100 cursor-pointer text-center text-base"
                                onMouseEnter={() => handleItemHover(opt, ci)}
                                onMouseLeave={() => handleItemLeave()}
                              >
                                {opt}
                              </div>
                            </li>
                          ))}
                        </ul>
                      ))}
                      {/* Empty 4th column for preview panel space */}
                      <div className="hidden md:block"></div>
                    </div>
                    {/* Preview panel - overlay positioned dynamically */}
                    <div className={`absolute bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200 shadow-2xl transition-all duration-500 ease-out z-10 ${hoveredItem ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'} ${hoveredColumn === 0 || hoveredColumn === 1 ? 'left-1/2 top-16 w-1/2' : (hoveredColumn === 2 || hoveredColumn === 3) ? 'left-0 top-16 w-1/2' : 'left-1/2 top-16 w-1/2'}`}>
                      <h4 className="font-semibold text-[#2F6A9E] mb-3 text-xl">{hoveredItem || ''}</h4>
                      <p className="text-base text-gray-600 mb-4">Professional service with expert guidance. We provide comprehensive support for this service with detailed documentation and expert consultation.</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Expert consultation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Timely delivery</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>24/7 support</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full bg-emerald-600 text-white py-3 rounded-md text-sm hover:bg-emerald-700 transition-colors font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                )
              })()
            ) : null}
          </div>
        </div>
      </nav>
      {/* spacer to offset fixed navbars so page content starts below them */}
      <div style={{ height: spacerHeight }} aria-hidden="true" />
    </>
  );
};

export default Navbar;