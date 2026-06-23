import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from "../assets/assets";
import { useTranslation } from 'react-i18next';
import '../i18n';

const mainItems = [
  { id: 'Business Registration', label: 'Business Registration', desc: 'Bookkeeping, financial statements, payroll and reconciliations.', groups: [
    { title: 'Business Entities Incorporation under ROC', items: ["Private Limited Company Incorporaton",'Public Limited Company Incorporation','Limited Liability Partnership (LLP) Incorporation','One Person Company (OPC) Private Limited'] },
    { title: 'Activity based Incorporation under ROC', items: ['Section 8 Company Incorporation','Nidhi Company Incorporation','Producer Company Incorporation','Indian Subsidiary Incorporation','Laision Office in India'] },
    { title: 'Type of Other Entities', items: ['Sole Proprietorship','Partnership Registration','Society Registration','Club Registration','Trust Registration'] },
    {title:'Business activity based Registrations',items:['GSTIN Registrations','Udyam Registration','MSME Registration','Start Up Registration','TAN Registration','Trade License','Shop & Establishment Registration','CLRA Registration','PF Registration','ESI Registration','Professional Tax Registration','Hygiene and Sanitation Certificate','Drug and Cosmetic License','NOC from Fire Department','Liquor License','Hallmark Registration','DIgital Signature Certificate Class III - Individual','DIgital Signature Certificate Class III - Organization']},
       {title:'Import Export',items:['IEC Registration','APEDA Registration','FIEO Registration','AD Code Registration','WPC Registration','PIMS Registration','SIMS Registration','Spice Board Registration','FDA License for exports']},
          {title:'Registration/License for Eateries',items:['FSSAI Registration','FSSAI State License','FSSAI Central License','Eating House License','Hygiene and Sanitation Certificate']},
             {title:'FDA License (Domestic)',items:['Wholesale License','Retail License','Restricted License','Drugs specified in Schedule X (Wholesale)','Drugs specified in Schedule X (Retail)']},
                {title:'Legal Metrology',items:['New License to Manufacturer','New License to Dealer','New License to Repairer']},
                   {title:'Pollution Control Board',items:['Consent to establish under Air & Waters Act','COnsent to Operate under Air Act','Consent to Operate under Water Act','Hazardous Authorization']},
                    {title:'Real estate',items:['RERA Registration','RERA Agent Registration']},
                     {title:'ISO Certification',items:['ISO 9001:2015 (Quality Management System)','ISO 22000:2018 (Food Safety Management)','ISO 14001:2015 (Environmental Management System)','ISO 45001:2018 (Occupational Health and Safety)','HACCP Certification','ISO 13485:2016 (Medical Devices)','ISO 27001:2013 (Information Security Management System','Halal Certification','WHO - GMP Certification','GDP Certification','ISO 14001 Certification','ISO 45001 Certification','ISO 22000 Certification','ISO 27001 Certification','CE Mark Certification']},
                      {title:'BIS',items:['BIS Registration','Eco Mark Scheme Certification','ISI Mark Certification','BIS CRS Registration','BIS LAB Recognition Scheme','Hallmark Registration','Assaying and Hallmarking Centre','STQC Certification','AGMARK License','FMCS BIS Certification']},
                       {title:'Trademark',items:['Trademark Registration','Trademark Objection','Trademark Assignment','Trademark Rectification','Intellectual Property Dispute','Trademark Renewal','Trademark Hearing','Trademark Opposition','Trademark Search','Brand Name Registration','Logo Registration','Wordmark Registration','IP Risk Assessment Reports']},
  ] },

  
  { id: 'IT/TDS', label: 'IT/TDS', desc: 'GST registration, returns, and compliance.', groups:[
    {title:'Income Tax Return FIling',items:['ITR 1 ','ITR 2','ITR 3','ITR 4' ,'ITR 5','ITR 6','ITR 7','Tax Planning in advance','Tax Planning during ITR Filing','Self Assessment Tax Computation and Challan payment']},
    {title:'Income Tax Return Revision/Rectification',items:['Revision/Rectification of ITR 1 ','Revision/Rectification of ITR 2 ','Revision/Rectification of ITR 3 ','Revision/Rectification of ITR 4 ','Revision/Rectification of ITR 5 ','Revision/Rectification of ITR 6 ','Revision/Rectification of ITR 7 '],},
    {title:'Income Tax Assessments',items:['Online Assessment U/S 143','Offline Assessment U/S 143','Online Assessment U/S 147','Offline Assessment U/S 147','Drafting of Reply to Notices by IT Deptt.','Client Representation Services']},
    
    {title:'TDS ',items:['TDS on Salary return Filing (24Q)','Correction/Revision in Salary TDS Return  filings (24Q)','TDS other than Salary return Filing (26Q)','Correction/Revision in other than Salary TDS filings (26Q)','TDS on Sale of Property by Resident (26QB)','Correction/Revision on Sale of Property TDS filings by Resident (26QB)','TDS on Rent of Property (26QC)','Correction/Revision on TDS on rent of Property (26QC)','Obtaining Lower rate of TDS on Sale of Property by Non Resident ','Correction/Revision on TDS on Sale of Property by Non Resident ','TAN Application']},
    {title:'Appeal Filing',items:['']},
    {title:'PAN Services',items:['New PAN Application','PAN Reissue Application','PAN Correction Application','Linking of Pan with Aadhaar','PAN Surrender Application']},
  ] },
  { id: 'Compliance', label: 'Compliance', desc: 'Company filings, annual returns and compliance.', groups:[
    {title:'Accounting',items:[{subtittle:'Onsite Accounting',subitem:['Day to Day Onsite Accounting','Weekly Onsite Accounting','Monthly Onsite Accounting','Quarterly Onsite Accounting','Yearly Onsite Accounting','Payroll Services']},{subtittle:"Offsite Accounting",subitem:['Day to Day Offsite Accounting','Weekly Offsite Accounting','Monthly Offsite Accounting','Quarterly Offsite Accounting','Yearly Offsite Accounting','Payroll Services']},{subtittle:'Asset Management',subitem:['Fixed Assets Tagging','Fixed Asset Valuation','Inventory Tagging','Inventory Valuation']},]},
    {title:'GST',items:[{subtittle:'Return Filing',subitem:['GST Monthly Return','GST Quarterly Return','GST Annual Return']},{subtittle:'Assessment',subitem:['GST Assessments','GSTIN Cancellation','GST LUT Application Filing','Reply to Notices']},]},
    {title:'MCA',items:['Commencement Certificate',     {subtittle:'Change Filings',subitem:['Appointment of Director','Resignation of Director','Removal of Director','Change of Company Name','Change of Registered Address','Increase in Authorised Capital','Transfer of Shares','Amendment in Memorandum of Association','Amendment in Articles of Association','Appointment of Auditor','Resignation of Auditor','Revival of Struck Off Companies']},    {subtittle:'DIN',subitem:['DIN Application','DIN Surrender','Directors Annual KYC','Director particulars updation','DIN ENquiry/Verification']},    {subtittle:'Closure',subitem:['Winding Up of a Private Limited Company','Winding Up of a Public Limited Company','Winding Up of a OPC Company','Winding Up of a Limited Liability Partnership (LLP)','Winding Up of a Section 8 Company','Winding Up of a Nidhi Company ','Winding Up of a Producer Company']},
        {subtittle:'Entity Conversion',subitem:['Change LLP Agreement','Change Partnership Deed','Dissolve a Partnership Firm','Convert Proprietorship to Partnership','Proprietorship to Limited Liability Partnership','Convert Partnership to Limited Liability Partnership','Convert Private Limited Company to Limited Liability Partnership','Convert Proprietorship to Open Person Company','Convert Proprietorship to Private Limited Company','Covert Partnership to Private Limited COmpany','Convert Limited Liability Partnership to Private Limited Company','Convert Open Person Company to Private Limited Company','Convert Private Limited Company to Public Limited Company']},
            {subtittle:'Annual Returns',subitem:['Annual Filings of a Proprietorship','Annual Filings of Partnership','Annual filings of Society','Annual Filing of Club','Annual Filing of Trust','Annual filings of Limited Liability Partnership','Annual Filing of One Person Company','Annual filing of Private Limited Company','Annual Filing of Public Limited Company','Annual Filing of Section 8 Company','Annual Filing of Nidhi Company','Annual Filing of Producer Company ','Annual Filing of ndian Subsidiary ']},]},



                {title:'DGFT',items:[{subtittle:'Assessment',subitem:['Assessment']},{subtittle:'Refund',subitem:['Refund','SAD Refund']}]},
                    {title:'MSME',items:['Modification in Registration','Renewal']},
                    {title:'FSSAI',items:['Annual Return Filing','Renewals']},
                    {title:'FDA',items:['Annual Return Filing','Renewals']},
                    {title:'Fire Department',items:['RENEWAL of NOC  of Fire Service','NOC from Fire Department before commencement of Construction Activities']},
                    {title:'Pollution Control Board',items:['Renewals']},
                    {title:'ProvidentFund',items:['Return filing','Refund','Profile Updation']},
                    {title:'ESI',items:['Return filing','Profile Updation']},
                    {title:'National Company Law Tribunal',items:['Claim Filing']},
  ]},


 { id: 'Legal Drafting', label: 'Legal Drafting', desc: 'Legal document preparation and review.', groups:[
    {title:'PROPERTY MATTERS',items:['Property Registration','Property Title Verification','Gift Deed','Sale Deed','Rent Agreement','Lease Deed','Relinquishment Deed']},
    { title: 'WILL & POWER OF ATTORNEY (POA)', subgroups: [
            { title: 'POWER OF ATTORNEY (POA)', items: ['General Power of Attorney (GPA)','Special Power Of Attorney (SPOA)'] },
      { title: 'WILL', items: ['Will Drafting','Will Probate'] },

    ] },
    {title:'AGREEMENTS DRAFTING',items:['Memorandum Of Understanding','Franchise Agreement','Joint Venture Agreement','Founders Agreement','Shareholders Agreement','Share Purchase Agreement','Consultancy Agreement','Freelancer Agreement','Agency Agreement','Non Disclosure Agreement']},
    {title:'OTHERS',items:['Account Opening Resolution','Website Terms And Conditions','Website Privacy Policy','Website Disclaimer Policy','Appointment Letter','Resignation Letter','Offer Letter']}
  ] },

  { id: 'Legal Services', label: 'Legal Services', desc: 'Legal document preparation and review.', groups:[
{title:'Appeal Filing',items:['Income Tax Appeal Filing','GST Appeal Filing']},
{title:'Civil Matters',items:['Legal Notice','Consumer Complaints','RTI Filing','']},
{title:'Registration',items:[{subtittle:'Property Registration',subitem:['Residential Property Registration','Commercial Property Registration','Sale Deed Registration']},{subtittle:'WILL Registration',subitem:['WILL Registration','Subsequent WILL Registration','Will Probate']},{subtittle:'Document Registration',subitem:['Gift Deed Registration','Lease Deed Registration','Relinquishment Deed Registration','General Power of Attorney (GPA) Registration','Builder Collaboration Agreement Registration','Agreement Registration','Bar Code Registration','Mariage Registration']},{subtittle:'Digital Signature Certificate',subitem:['DIgital Signature Certificate Class III - Individual','DIgital Signature Certificate Class III - Organization']},]}, 
{title:'Certificates',items:['Legal Heir Certificate','Family Members Certificate']},
{title:'Property Assessment',items:['Residential Property review and assesment','Commercial Property review and assesment','Industrial Property review and assesment','Title Verification','Representation Services for Property and Builder Collaboration','Representation in Property Auction Service']}, 
]},






]

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showTopBar, setShowTopBar] = useState(true);
  const { openSignup } = useContext(AppContext)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

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
  const [hoveredSubItem, setHoveredSubItem] = useState(null)
  const hoverTimeoutRef = useRef(null)
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
    // clear hoveredGroup and hoveredSubItem when dropdown closes
    if (openDropdown === null) {
      setHoveredGroup(null)
      setHoveredSubItem(null)
    }
  }, [openDropdown])

  // Set first heading when dropdown opens
  useEffect(() => {
    if (openDropdown) {
      const info = mainItems.find(i => i.id === openDropdown)
      if (info && info.groups && info.groups.length > 0) {
        if (info.groups[0].subgroups && info.groups[0].subgroups.length > 0) {
          setHoveredGroup(info.groups[0].subgroups[0].title)
        } else {
          setHoveredGroup(info.groups[0].title)
        }
      } else if (info && info.options && info.options.length > 0) {
        setHoveredGroup(info.options[0])
      }
    }
  }, [openDropdown])

  function toggleDropdown(id) {
    setOpenDropdown(prev => (prev === id ? null : id))
  }

  useEffect(() => {
    const measure = () => {
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
        } z-[100]`}
      >
        <div className="max-w-8xl mx-auto h-14 flex items-center justify-between px-4">
          {/* Left Side - Contact Icons */}
          <div className="flex items-center gap-0  rounded-lg border-2 border-white/10 hover:border-white/80">
            <a href="tel:+919999117576" className="flex items-center gap-2 px-3 py-2  rounded-lg  transition-colors group" title="Call Us">
              <svg className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>

            </a>
            <Link to="/contact" className="flex items-center gap-2 px-3 py-2  rounded-lg  transition-colors group" title="Email Us">
              <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>

            </Link>
            <a href="https://wa.me/9999117576" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2  rounded-lg  transition-colors group" title="WhatsApp">
              <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
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
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                title="Language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'ZH'}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl py-2 z-[9999]">
                  <button
                    onClick={() => { i18n.changeLanguage('en'); setLangDropdownOpen(false) }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${i18n.language === 'en' ? 'bg-[#2F6A9E] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage('zh'); setLangDropdownOpen(false) }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${i18n.language === 'zh' ? 'bg-[#2F6A9E] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    中文
                  </button>
                </div>
              )}
            </div>

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
                <div className="absolute  right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-[9999] animate-fadeIn">
                  <Link to="/" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Home</Link>
                  <Link to="/about" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">About</Link>
                  <Link to="/contact" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Contact</Link>
                  <Link to="/blog" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Blog</Link>
                  <Link to="/career" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Career</Link>
                  <Link to="/review" onClick={() => setTopMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-[#2F6A9E] hover:text-white transition-colors">Reviews</Link>
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
        className={`fixed left-0 right-0 bg-[#E5F0E5] shadow-md w-full ${
          showTopBar ? 'top-14' : 'top-0'
        } ${topMenuOpen ? 'z-40' : 'z-50'}`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4">

         <div>
          <Link to="/">
            <img src={assets.logo} alt="logo" className="h-10 sm:h-12 md:h-14" />
          </Link>
         </div>

          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex  font-medium flex-wrap px-2 text-base">
              {mainItems.map(item => (
                <li key={item.id} onMouseEnter={() => setOpenDropdown(item.id)} className="relative">
                  <button data-item={item.id} onClick={() => toggleDropdown(item.id)} className="px-6 py-2 hover:text-emerald-600 flex items-center gap-2 text-base">
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
                    <span className="text-base font-medium">{item.label}</span>
                    <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openDropdown === item.id && item.groups && item.groups.length > 0 ? (
                    <ul className="pl-4 pb-2 pt-1 space-y-1 max-h-60 overflow-y-auto">
                      {item.groups.map((group, gi) => (
                        <li key={gi} className="mt-2">
                          <h5 className="text-sm font-semibold text-[#2F6A9E] mb-1">{group.title}</h5>
                          {group.items && group.items.map((opt, oi) => {
                            const isObject = typeof opt === 'object' && opt !== null
                            const optText = isObject ? opt.subtittle : opt
                            const key = isObject ? opt.subtittle : opt
                            return (
                              <div key={key} className="text-sm px-2 py-1.5 rounded hover:bg-gray-100 text-gray-700">{optText}</div>
                            )
                          })}
                          {group.subgroups && group.subgroups.map((sg, sgi) => (
                            <div key={sgi} className="mt-1">
                              <h6 className="text-xs font-semibold text-gray-600 mb-1">{sg.title}</h6>
                              {sg.items.map((opt, oi) => {
                                const isObject = typeof opt === 'object' && opt !== null
                                const optText = isObject ? opt.subtittle : opt
                                const key = isObject ? opt.subtittle : opt
                                return (
                                  <div key={key} className="text-xs px-2 py-1 rounded hover:bg-gray-100 text-gray-700">{optText}</div>
                                )
                              })}
                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t">
              <Link to="/appointment" onClick={() => setMobileOpen(false)} className="block w-full bg-emerald-600 text-white px-5 py-3 rounded-md text-base font-medium text-center hover:bg-emerald-700 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown panel (single shared panel, content changes per openDropdown) */}
        <div className="hidden md:flex absolute left-0 right-0 top-16 z-40 mt-0 justify-center">
          <div onMouseEnter={() => setOpenDropdown(openDropdown)} onMouseLeave={() => setOpenDropdown(null)} className="w-[90vw] bg-white text-black rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${openDropdown ? 'opacity-100 translate-y-2 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}">
            {openDropdown ? (
              (() => {
                const info = mainItems.find(i => i.id === openDropdown)
                // If groups provided, render each group as a column with its own heading
                if (info.groups && info.groups.length) {
                  // 4-column layout with fixed size
                  return (
                    <div ref={dropdownRef} className="relative p-4">
                      <div className="grid grid-cols-4 gap-3" style={{height: '600px'}}>
                        {/* Column 1 - All headings */}
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 overflow-hidden">
                           <div className="space-y-1 h-full overflow-y-auto">
                            {info.groups.map((g) => (
                              <div key={g.title} className="mb-2">
                                {g.subgroups ? (
                                  g.subgroups.map((sg, sgi) => (
                                    <button
                                      key={sgi}
                                      onMouseEnter={() => {
                                        setHoveredGroup(sg.title)
                                        setHoveredSubItem(null)
                                      }}
                                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex items-center justify-between ${hoveredGroup === sg.title ? 'bg-[#2F6A9E] text-white' : 'hover:bg-gray-200'}`}
                                    >
                                      <span className="truncate">{sg.title}</span>
                                      <svg className="w-3 h-3 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </button>
                                  ))
                                ) : (
                                  <button
                                    onMouseEnter={() => {
                                      setHoveredGroup(g.title)
                                      setHoveredSubItem(null)
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex items-center justify-between ${hoveredGroup === g.title ? 'bg-[#2F6A9E] text-white' : 'hover:bg-gray-200'}`}
                                  >
                                    <span className="truncate">{g.title}</span>
                                    <svg className="w-3 h-3 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column 2 - Items */}
                        <div className="bg-white rounded-lg p-3 border border-gray-200 overflow-hidden">
                          {hoveredGroup && (() => {
                            // Find the group or subgroup that matches the hovered heading
                            let grp = info.groups.find(g => g.title === hoveredGroup)
                            let items = grp?.items
                            let title = grp?.title

                            if (!grp) {
                              // Check subgroups
                              for (const g of info.groups) {
                                if (g.subgroups) {
                                  const sg = g.subgroups.find(s => s.title === hoveredGroup)
                                  if (sg) {
                                    items = sg.items
                                    title = sg.title
                                    break
                                  }
                                }
                              }
                            }

                            return (
                              <div className="h-full overflow-y-auto">
                                <h5 className="font-medium text-[#2F6A9E] mb-2 text-sm">{title}</h5>
                                <ul className="space-y-1">
                                  {items?.map((it, idx) => {
                                    const isObject = typeof it === 'object' && it !== null
                                    const itemText = isObject ? it.subtittle : it
                                    const hasSubItems = isObject && it.subitem && it.subitem.length > 0
                                    const key = isObject ? it.subtittle : it
                                    return (
                                      <li key={key} className="px-2 py-1.5 rounded hover:bg-gray-100 text-sm cursor-pointer flex items-center justify-between"
                                        onMouseEnter={() => {
                                          if (hasSubItems) {
                                            setHoveredSubItem(it)
                                          } else {
                                            setHoveredSubItem(null)
                                          }
                                        }}
                                      >
                                        <span className="truncate">{itemText}</span>
                                        {hasSubItems && (
                                          <svg className="w-3 h-3 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        )}
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            )
                          })()}
                        </div>

                        {/* Column 3 - Sub-items */}
                        <div className="bg-white rounded-lg p-3 border border-gray-200 overflow-hidden">
                          {hoveredSubItem && (() => {
                            return (
                              <div className="h-full overflow-y-auto">
                                <h5 className="font-medium text-[#2F6A9E] mb-2 text-sm">{hoveredSubItem.subtittle}</h5>
                                <ul className="space-y-1">
                                  {hoveredSubItem.subitem?.map((sub, idx) => (
                                    <li key={sub} className="px-2 py-1.5 rounded hover:bg-gray-100 text-sm truncate">{sub}</li>
                                  ))}
                                </ul>
                              </div>
                            )
                          })()}
                        </div>

                        {/* Column 4 - Empty for future content */}
                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                        
                        </div>
                      </div>
                    </div>
                  )
                }
                // fallback: split options into 4 columns
                const per = Math.ceil((info.options || []).length / 4) || 1
                const cols = [0,1,2,3].map(i => (info.options || []).slice(i*per, (i+1)*per))
                return (
                  <div ref={dropdownRef} className="relative p-4">
                    <div className="grid grid-cols-4 gap-3" style={{height: '400px'}}>
                      {cols.map((col, ci) => (
                        <div key={ci} className="bg-white rounded-lg p-3 border border-gray-200 overflow-hidden">
                          <div className="h-full overflow-y-auto">
                            <div className="space-y-1">
                              {col.map((opt, oi) => (
                                <button
                                  key={oi}
                                  onMouseEnter={() => setHoveredGroup(opt)}
                                  className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm truncate ${hoveredGroup === opt ? 'bg-[#2F6A9E] text-white' : 'hover:bg-gray-200'}`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
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