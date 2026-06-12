import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-[#E5F0E5]">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100 text-center">Learn more about Mayank Varshney & Co.</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Left Side - Content */}
          <div className="space-y-6 p-4 overflow-auto">
            <div>
          
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to simplify complex financial and legal processes, Mayank Varshney & Co. has grown into a trusted name in the industry. Our journey began with a simple mission: to provide professional, reliable, and affordable services to businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we have helped hundreds of clients navigate the complexities of taxation, compliance, and business regulations. Our team of experienced professionals brings together expertise from various domains to offer comprehensive solutions under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to uphold our commitment to excellence, integrity, and client satisfaction. We believe in building long-term relationships with our clients by delivering consistent quality and personalized service.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
To make financial and legal expertise accessible to everyone, enabling individuals, startups, and businesses to make smarter decisions, stay compliant, and achieve long-term success and growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the most trusted and preferred financial and legal services provider in India, known for our expertise, integrity, and commitment to client success.
              </p>
            </div>

          
          </div>

          {/* Right Side - Image with Effects */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 mb-3 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2F6A9E]/10 to-[#1a4a75]/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                 <img src={assets.info1} className="h-full w-full object-cover"/>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2F6A9E] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Trusted</div>
                    <div className="text-xs text-gray-500">500+ Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2F6A9E] rounded-full flex items-center justify-center">
                   <img src={assets.info1} className="w-full h-full" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Fast</div>
                    <div className="text-xs text-gray-500">Quick Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default About
