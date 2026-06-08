import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { assets } from "../assets/assets";

const mainItems = [
  { id: 'Accounting', label: 'Accounting', desc: 'Bookkeeping, financial statements, payroll and reconciliations.', options: ['Bookkeeping', 'Financial Statements', 'Payroll'] },
  { id: 'IncomeTax', label: 'Income Tax', desc: 'Tax return filing, tax planning and notices.', options: ['Filing', 'Tax Planning', 'Notice Responses'] },
  { id: 'GoodsandServiceTax_GST', label: 'GST', desc: 'GST registration, returns, and compliance.', options: ['Registration', 'Return Filing', 'GST Audit'] },
  { id: 'RegistrarofCompanies_ROC', label: 'ROC', desc: 'Company filings, annual returns and compliance.', options: ['Annual Filing', 'Director Changes'] },
  { id: 'Labour_Department', label: 'Labour Department', desc: 'Labour law compliance and registrations.', options: ['Compliance', 'Registrations'] },
  { id: 'MicroSmallMediumEnterprises_MSME', label: 'MSME', desc: 'MSME registration and schemes advisory.', options: [] },
  { id: 'DGFT', label: 'DGFT', desc: 'Export licences and foreign trade compliance.', options: [] },
  { id: 'NationalCompanyLawTribunal_NCLT', label: 'NCLT', desc: 'Corporate dispute resolution and procedures.', options: [] },
  { id: 'Food_Safety_and_Drug_Administration_Drug', label: 'Drug Administration', desc: 'Drug administration registrations and compliance.', options: [] },
  { id: 'Food_Safety_Standards_Authority_of_India_Food', label: 'FSSAI', desc: 'Food Safety licensing and compliance.', options: [] },
  { id: 'Fire_Department', label: 'Fire Department', desc: 'Fire safety NOCs and inspections.', options: [] },
  { id: 'Pollution_Control_Board', label: 'Pollution Control Board', desc: 'Environmental clearances and compliance.', options: [] },
  { id: 'ProvidentFund_PF', label: 'Provident Fund (PF)', desc: 'PF registration and statutory compliance.', options: [] },
  { id: 'EmployeeStateInsurance_ESI', label: 'ESI', desc: 'ESI registration and claims assistance.', options: [] },
  { id: 'Legal_Metrology', label: 'Legal Metrology', desc: 'Weights & measures compliance and approvals.', options: [] },
  { id: 'Revenue_Department', label: 'Revenue Department', desc: 'Revenue compliance and departmental representations.', options: [] },
  { id: 'Industrial_Plot_Allotment', label: 'Industrial Plot Allotment', desc: 'Assistance with industrial land allotments.', options: [] },
  { id: 'Registrations', label: 'Registrations', desc: 'Company, LLP, trademark and NGO registrations.', options: [] },
  { id: 'Bank_Funding', label: 'Bank Funding', desc: 'Loan facilitation, documentation and liaising.', options: [] },
  { id: 'Audit', label: 'Audit', desc: 'Statutory and internal audit services.', options: [] },
  { id: 'Start_Up', label: 'Start Up', desc: 'Startup registrations, funding and compliance.', options: [] },
  { id: 'Civil_Matters', label: 'Civil Matters', desc: 'Civil litigation and dispute resolution.', options: [] },
  { id: 'Criminal_Matters', label: 'Criminal Matters', desc: 'Criminal defense and procedural assistance.', options: [] },
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
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">📞</span>
              <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span>✉️</span>
              <a href="mailto:info@mayankca.com" className="hover:underline">info@mayankca.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="hidden sm:flex items-center gap-4">
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
        className={`relative bg-[#E5F0E5] shadow-md w-full z-50 transition-all duration-300 ${
          showTopBar ? 'sticky top-12' : 'fixed top-0'
        }`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4">

         <div>
          <img src={assets.logo} alt="logo" className="h-12" />
         </div>

          <div className="hidden md:block max-w-[65vw]">
            <ul className="flex gap-6 font-medium overflow-x-auto px-2 no-scrollbar">
              {mainItems.map(item => (
                <li key={item.id} className="relative flex-shrink-0">
                  <button onClick={() => toggleDropdown(item.id)} className="px-3 py-2 hover:text-emerald-600 whitespace-nowrap">
                    {item.label}
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
        <div className={`absolute left-0 right-0 top-full z-40 mt-2 flex justify-center pointer-events-none`}>
          <div className={`w-[90vw] max-w-5xl bg-white text-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-250 ${openDropdown ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-3 scale-95'}`}>
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
                      <h4 className="font-medium mb-2">Quick Links</h4>
                      <ul className="space-y-2">
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