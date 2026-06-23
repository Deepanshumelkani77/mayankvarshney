import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const [mainImageLoaded, setMainImageLoaded] = useState(false)
  const [badgeImageLoaded, setBadgeImageLoaded] = useState(false)
  return (
    <div className="bg-[#E5F0E5]">
      {/* Hero Section */}
      <div className="bg-[#053131] text-white py-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-100 text-center">{t('aboutHero')}</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Left Side - Content */}
          <div className="space-y-6 p-4 overflow-auto">
            <div>
          
              <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                {t('aboutPara1')}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                {t('aboutPara2')}
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                {t('aboutPara3')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">{t('ourMission')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {t('missionText')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">{t('ourVision')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {t('visionText')}
              </p>
            </div>

          
          </div>

          {/* Right Side - Image with Effects */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 mb-3 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2F6A9E]/10 to-[#1a4a75]/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  {!mainImageLoaded && (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <img 
                    src={assets.info1} 
                    className={`h-full w-full object-cover transition-opacity duration-300 ${mainImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setMainImageLoaded(true)}
                  />
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
                    <div className="text-xs font-semibold text-gray-800">{t('trusted')}</div>
                    <div className="text-xs text-gray-500">{t('clients')}</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2F6A9E] rounded-full flex items-center justify-center">
                    {!badgeImageLoaded && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 animate-pulse">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <img 
                      src={assets.info1} 
                      className={`w-full h-full transition-opacity duration-300 ${badgeImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setBadgeImageLoaded(true)}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">{t('fast')}</div>
                    <div className="text-xs text-gray-500">{t('quickService')}</div>
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
