import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { assets } from "../assets/assets";

const mainItems = [
  { id: 'Accounting', label: 'Accounting', desc: 'Bookkeeping, financial statements, payroll and reconciliations.', options: ["Day to Day Onsite Accounting","Weekly Onsite Accounting","Monthly Onsite Accounting","Yearly Onsite Accounting","Quarterly Onsite Accounting","Day to Day Offsite Accounting","Weekly Offsite Accounting","Monthly Offsite Accounting","Quarterly Offsite Accounting","Yearly Offsite Accounting","Payroll Services","Fixed Assets Tagging","Fixed Asset Valuation","Inventory Valuation"] },
  { id: 'ITR / Tax', label: 'ITR / Tax', desc: 'Income tax returns and compliance.', options: ['Registration', 'Return Filing', 'Tax Audit'] },
  
  { id: 'GST', label: 'GST', desc: 'GST registration, returns, and compliance.', options: ['Registration', 'Return Filing', 'GST Audit'] },
  { id: 'MCA', label: 'MCA', desc: 'Company filings, annual returns and compliance.', options: ['Annual Filing', 'Director Changes'] },
   { id: 'DGFT', label: 'DGFT', desc: 'DGFT registration, returns, and compliance.', options: ['Registration', 'Return Filing', 'DGFT Audit'] },
  { id: 'Legal Drafting', label: 'Legal Drafting', desc: 'Legal document preparation and review.', options: ['Contract Drafting', 'Agreement Review'] },
  { id: 'Registration', label: 'Registration', desc: 'Business registration and compliance.', options: ['Company Registration', 'Trademark Registration'] },
  { id: 'Compliance', label: 'Compliance', desc: 'Regulatory compliance and reporting.', options: ['Annual Compliance', 'Quarterly Reporting'] },
 { id: 'Investment', label: 'Investment', desc: 'Investment advisory and planning.', options: ['Financial Planning', 'Investment Analysis'] },



]

const Navbar = () => {
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

  useEffect(() => {
    function handleOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

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
        <div className="max-w-8xl mx-auto flex items-center justify-around px-4 py-4">

         <div>
          <img src={assets.logo} alt="logo" className="h-14" />
         </div>

          <div className="hidden md:block w-full">
            <ul className="flex gap-1 font-medium flex-wrap px-2 text-lg px-15">
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

          <div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md">Book Appointment</button>
          </div>

        </div>

        {/* Dropdown panel (single shared panel, content changes per openDropdown) */}
        <div className={`absolute left-0 right-0 top-20 z-40 mt-0 flex justify-center pointer-events-none`}>
          <div className={`w-[90vw] max-w-5xl bg-white text-black rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${openDropdown ? 'opacity-100 translate-y-2 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95'}`}>
            {openDropdown ? (
              (() => {
                const info = mainItems.find(i => i.id === openDropdown)
                return (
                  <div className="grid grid-cols-3 gap-6 p-6 max-h-[92vh] overflow-y-auto">
                    <div className="col-span-1">
                      <h3 className="text-lg font-semibold">{info.label}</h3>
                      <p className="text-sm text-gray-600 mt-2">{info.desc}</p>
                    </div>
                    <div className="col-span-2">
                     
                      <ul className="grid grid-cols-2 gap-2">
                        {info.options.map(opt => (
                          <li key={opt} className="px-3 py-2 rounded hover:bg-gray-100">{opt}</li>
                        ))}
                      </ul>
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

export default Navbar;