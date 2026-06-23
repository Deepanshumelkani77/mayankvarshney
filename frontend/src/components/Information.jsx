import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next'
 
const Information = () => {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
 
  const images = [
    {
      id: 1,
      title: t('information.image1Title'),
      desc: t('information.image1Desc')
    },
    {
      id: 2,
      title: t('information.image2Title'),
      desc: t('information.image2Desc')
    },
    {
      id: 3,
      title: t('information.image3Title'),
      desc: t('information.image3Desc')
    }
  ]
 
  return (
    <div className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Effects */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2F6A9E]/20 to-[#1a4a75]/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    {!imageLoaded && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <img 
                      src={assets.info} 
                      alt="Information" 
                      className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
 
            {/* Floating Image 1 - Top Right */}
            <div className="absolute -top-6 -right-6 z-20 animate-float-slow">
              <div className="w-40 h-40 bg-gradient-to-br from-[#2F6A9E] to-[#1a4a75] rounded-2xl shadow-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-white/80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-white/80 text-xs">{t('information.team')}</p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Floating Image 2 - Bottom Left */}
            <div className="absolute -bottom-6 -left-6 z-20 animate-float">
              <div className="w-36 h-36 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#2F6A9E]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 mx-auto text-[#2F6A9E] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600 text-xs">{t('information.quality')}</p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2F6A9E]/10 rounded-full blur-3xl -z-10"></div>
          </div>
 
          {/* Right Side - Information */}
          <div className="space-y-8">
            <div>
              <span className="text-[#2F6A9E] font-semibold text-sm uppercase tracking-wider">{t('information.aboutUs')}</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
                {t('information.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('information.description')}
              </p>
            </div>
 
            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2F6A9E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t('information.feature1Title')}</h3>
                  <p className="text-gray-600 text-sm">{t('information.feature1Desc')}</p>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2F6A9E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t('information.feature2Title')}</h3>
                  <p className="text-gray-600 text-sm">{t('information.feature2Desc')}</p>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2F6A9E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{t('information.feature3Title')}</h3>
                  <p className="text-gray-600 text-sm">{t('information.feature3Desc')}</p>
                </div>
              </div>
            </div>
 
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#2F6A9E] to-[#1a4a75] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#1a4a75] hover:to-[#2F6A9E] transition-all shadow-lg hover:shadow-xl">
                {t('information.learnMore')}
              </button>
              <button className="border-2 border-[#2F6A9E] text-[#2F6A9E] px-8 py-3 rounded-xl font-semibold hover:bg-[#2F6A9E] hover:text-white transition-all">
                {t('information.ourServices')}
              </button>
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
 
export default Information