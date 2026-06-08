import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="bg-[#053131] text-white shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={assets.logo} alt="Logo" className="h-10 w-auto mr-3" />
            
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-white hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                Services
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                Blog
              </Link>
              <Link to="/career" className="text-gray-300 hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                Career
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-emerald-300 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-emerald-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/signup" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-emerald-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
