import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

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

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`bg-[#053131] text-white transition-all duration-300 overflow-hidden ${
          showTopBar ? "h-12 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="max-w-8xl mx-auto h-12 flex items-center justify-between px-4">
          <div className="flex gap-5">
          <p>📞 +91 9876543210</p>
          <p>✉️ info@mayankca.com</p>
          </div>

          <div className="flex gap-10">
          <div className="flex gap-5">
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact us</a>
          </div>
            
            <div>Signup</div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-[#E5F0E5] shadow-md w-full z-50 transition-all duration-300 ${
          showTopBar ? "sticky top-12" : "fixed top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
         
         <div>
          <img src={assets.logo} alt="logo"></img>
         </div>

          <ul className="hidden md:flex gap-8 font-medium">
            <li>Accounting</li>
            <li>Income Tax</li>
            <li>GoodsandServiceTax_GST</li>
            <li>RegistrarofCompanies_ROC</li>
            <li>Labour_Department</li>
          </ul>

<div>
  <button>Book Appointment</button>
</div>


        </div>
      </nav>
    </>
  );
};

export default Navbar;