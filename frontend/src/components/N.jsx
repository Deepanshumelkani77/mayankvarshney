import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { assets } from "../assets/assets";

const mainItems = [
  { id: 'Accounting', label: 'Accounting', desc: 'Bookkeeping, financial statements, payroll and reconciliations.', groups: [
    { title: 'Onsite', items: ["Day to Day Onsite Accounting","Weekly Onsite Accounting","Monthly Onsite Accounting","Quarterly Onsite Accounting","Yearly Onsite Accounting",,"Payroll Services"] },
    { title: 'Offsite', items: ["Day to Day Offsite Accounting","Weekly Offsite Accounting","Monthly Offsite Accounting","Quarterly Offsite Accounting","Yearly Offsite Accounting","Payroll Services"] },
    { title: 'Asset Management', items: ["Fixed Assets Tagging","Fixed Asset Valuation","Inventory Valuation"] }
  ] },
  { id: 'ITR / Tax', label: 'ITR / Tax', desc: 'Income tax returns and compliance.', options: ['Registration', 'Return Filing', 'Tax Audit'] },
  
  { id: 'GST', label: 'GST', desc: 'GST registration, returns, and compliance.', options: ['Registration', 'Return Filing', 'GST Audit'] },
  { id: 'MCA', label: 'MCA', desc: 'Company filings, annual returns and compliance.', options: ['Annual Filing', 'Director Changes'] },
   { id: 'DGFT', label: 'DGFT', desc: 'DGFT registration, returns, and compliance.', options: ['Registration', 'Return Filing', 'DGFT Audit'] },
  { id: 'Legal Drafting', label: 'Legal Drafting', desc: 'Legal document preparation and review.', options: ['Contract Drafting', 'Agreement Review'] },
  { id: 'Registration', label: 'Registration', desc: 'Business registration and compliance.', options: ['Company Registration', 'Trademark Registration'] },
  { id: 'Compliance', label: 'Compliance', desc: 'Regulatory compliance and reporting.', options: ['Annual Compliance', 'Quarterly Reporting'] },
 { id: 'Investment', label: 'Investment', desc: 'Investment advisory and planning.', options: ['Financial Planning', 'Investment Analysis'] },



]

const N = () => {
  const [showTopBar, setShowTopBar] = useState(true);

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
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setMobileOpen(false)
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
    // keep for future use if needed
    return () => {}
  }, [openDropdown])

  function toggleDropdown(id) {
    setOpenDropdown(prev => (prev === id ? null : id))
  }

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`bg-[#053131] text-white transition-all duration-300 overflow-hidden ${
          showTopBar ? 'h-12 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <div className="max-w-8xl mx-auto h-12 flex items-center justify-between px-4">
          <div className="flex items-center gap-6 text-lg">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">📞</span>
              <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span>✉️</span>
              <a href="mailto:info@mayankca.com" className="hover:underline">info@mayankca.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <div className="hidden sm:flex items-center gap-8">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>

            <Link to="/signup" className="ml-2 inline-flex items-center bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-emerald-700">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        ref={navRef}
        onMouseLeave={() => setOpenDropdown(null)}
        className={`relative bg-[#E5F0E5] shadow-md w-full z-50 transition-all duration-300 ${
          showTopBar ? 'sticky top-12' : 'fixed top-0'
        }`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4">

         <div>
          <img src={assets.logo} alt="logo" className="h-14" />
         </div>

          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-1 font-medium flex-wrap px-2 text-lg">
              {mainItems.map(item => (
                <li key={item.id} onMouseEnter={() => setOpenDropdown(item.id)} className="relative">
                  <button onClick={() => toggleDropdown(item.id)} className="px-3 py-2 hover:text-emerald-600 flex items-center gap-2">
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
            <button className="hidden md:inline bg-emerald-600 text-white px-4 py-2 rounded-md">Book Appointment</button>

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
                        <li key={opt} className="text-sm px-2 py-1 rounded hover:bg-gray-100">{opt}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown panel (single shared panel, content changes per openDropdown) */}
        <div className={`absolute left-0 right-0 top-20 z-40 mt-0 flex justify-center pointer-events-none`}>
          <div className={`w-[90vw] max-w-6xl bg-white text-black rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${openDropdown ? 'opacity-100 translate-y-2 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95'}`}>
            {openDropdown ? (
              (() => {
                const info = mainItems.find(i => i.id === openDropdown)
                // If groups provided, render each group as a column with its own heading
                if (info.groups && info.groups.length) {
                  return (
                    <div ref={dropdownRef} className="flex p-6 max-h-[92vh] overflow-y-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
                          {info.groups.map((g, gi) => (
                          <div key={gi}>
                            <h4 className=" font-semibold mb-2 text-lg">{g.title}</h4>
                            <ul className="space-y-2 flex flex-col ">
                              {g.items.map(opt => (
                                <li key={opt} className="relative">
                                  <div 
                                    className=" py-2 rounded hover:bg-gray-100 cursor-pointer "
                                    onMouseEnter={() => setHoveredItem(opt)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                  >
                                    {opt}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Preview panel */}
                      <div className={`w-64 ml-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200 transition-all duration-300 ease-in-out ${hoveredItem ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                        <h4 className="font-semibold text-emerald-800 mb-2">{hoveredItem || ''}</h4>
                        <p className="text-sm text-gray-600">Professional service with expert guidance. Click to learn more about this service.</p>
                        <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors">
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
                  <div ref={dropdownRef} className="flex p-6 max-h-[92vh] overflow-y-auto">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-center mb-4">{info.label}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cols.map((col, ci) => (
                          <ul key={ci} className="space-y-2 flex flex-col items-center">
                            {col.map(opt => (
                              <li key={opt} className="relative">
                                <div 
                                  className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-center"
                                  onMouseEnter={() => setHoveredItem(opt)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                >
                                  {opt}
                                </div>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                    {/* Preview panel */}
                    <div className={`w-64 ml-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200 transition-all duration-300 ease-in-out ${hoveredItem ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                      <h4 className="font-semibold text-emerald-800 mb-2">{hoveredItem || ''}</h4>
                      <p className="text-sm text-gray-600">Professional service with expert guidance. Click to learn more about this service.</p>
                      <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors">
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
    </>
  );
};

export default N;