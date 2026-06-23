import React, { useMemo, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const sampleDueDates = {
  GST: [
    { id: 1, title: 'GSTR-1 (Quarterly)', date: '10 Jul 2026' },
    { id: 2, title: 'GSTR-3B (Monthly)', date: '20 Jul 2026' },
    { id: 3, title: 'GST Annual Return', date: '31 Aug 2026' },
  ],
  Accounting: [
    { id: 1, title: 'Quarterly Reconciliation', date: '15 Jul 2026' },
    { id: 2, title: 'Payroll Submission', date: '25 Jul 2026' },
  ],
  'Income Tax': [
    { id: 1, title: 'TDS Payment', date: '7 Jul 2026' },
    { id: 2, title: 'Income Tax Return (FY 25-26)', date: '31 Jul 2026' },
  ],
}

const services = [
  'Accounting',
  'GST',
  'Income Tax',
  'ROC',
  'Labour',
  'MSME',
  'DGFT',
  'FSSAI',
  'PF',
  'ESI',
  'Audit',
  'Start Up',
  'Civil Matters',
  'Criminal Matters',
]

const Header = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('GST')
  const scrollContainerRef = useRef(null)

  const dueDates = useMemo(() => {
    return sampleDueDates[selected] || []
  }, [selected])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <header className="relative w-full bg-[#053131] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-2xl sm:text-5xl lg:text-3xl font-bold mb-8">{t('header.title')}</h1>

        {/* Search bar centered */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-3xl">
            <label className="sr-only">{t('header.searchLabel')}</label>
            <div className="flex items-center bg-white rounded-xl shadow-sm overflow-hidden">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 px-8 py-4 text-xl text-gray-800 focus:outline-none"
                placeholder={t('header.searchPlaceholder')}
                aria-label="Search services"
              />
              <button className="bg-emerald-600 text-white px-8 py-4 text-xl font-semibold hover:bg-emerald-700">{t('header.searchButton')}</button>
            </div>
          </div>
        </div>

        {/* Due dates panel (horizontal auto-scrolling marquee) */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Services chips at top of panel */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
            <div className="flex items-center gap-2">
              {/* Left scroll button */}
              <button
                onClick={scrollLeft}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                title="Scroll left"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Scrollable chips container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-3 overflow-x-auto no-scrollbar py-1 scroll-smooth"
              >
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelected(s)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full text-lg font-medium ${selected === s ? 'bg-[#2F6A9E] text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Right scroll button */}
              <button
                onClick={scrollRight}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                title="Scroll right"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Due dates content */}
          <div className="px-6 py-3" >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-[#053131]">{t('header.upcomingDueDates')} — {selected}</h3>
              <div className="text-lg text-gray-500">{t('header.items', { count: dueDates.length })}</div>
            </div>

            {dueDates.length === 0 ? (
              <div className="text-lg text-gray-600">{t('header.noDueDates', { service: selected })}</div>
            ) : (
              <>
                <style>{`
                  @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .marquee { overflow: hidden; position: relative; }
                  .marquee-track { display: inline-block; white-space: nowrap; will-change: transform; animation-name: marquee; animation-timing-function: linear; animation-iteration-count: infinite; }
                  .marquee:hover .marquee-track { animation-play-state: paused; }
                  .marquee-item { display: inline-block; padding: 16px 24px; margin-right: 16px; background: #f8fafc; border-radius: 12px; }
                `}</style>

                <div className="marquee">
                  <div
                    className="marquee-track"
                    style={{ animationDuration: `${Math.max(10, dueDates.length * 4)}s` }}
                  >
                    {dueDates.concat(dueDates).map((d, idx) => (
                      <div key={idx} className="marquee-item flex items-center gap-4">
                        <div>
                          <div className="text-lg font-medium text-gray-800">{d.title}</div>
                          <div className="text-base text-gray-500">{t('header.detailsAvailable')}</div>
                        </div>
                        <div className="text-lg font-medium text-emerald-600">{d.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
