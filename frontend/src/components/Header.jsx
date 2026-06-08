import React, { useMemo, useState } from 'react'

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
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('GST')

  const dueDates = useMemo(() => {
    return sampleDueDates[selected] || []
  }, [selected])

  return (
    <header className="relative w-full bg-[#053131] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">Mayank Varshney & Co. — Secure & Legal Services </h1>

        {/* Search bar centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <label className="sr-only">Search services</label>
            <div className="flex items-center bg-white rounded-md shadow-sm overflow-hidden">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-800 focus:outline-none"
                placeholder="Search services, e.g., GST, Accounting..."
                aria-label="Search services"
              />
              <button className="bg-emerald-600 text-white px-4 py-3 hover:bg-emerald-700">Search</button>
            </div>
          </div>
        </div>

        {/* Services chips (horizontally scrollable) */}
        <div className="mt-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
            {services.map(s => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${selected === s ? 'bg-white text-emerald-700' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Due dates panel (horizontal auto-scrolling marquee) */}
        <div className="mt-6">
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Upcoming Due Dates — {selected}</h3>
              <div className="text-sm text-gray-500">{dueDates.length} items</div>
            </div>

            {dueDates.length === 0 ? (
              <div className="text-sm text-gray-600">No upcoming due dates for {selected}.</div>
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
                  .marquee-item { display: inline-block; padding: 12px 20px; margin-right: 12px; background: #f8fafc; border-radius: 8px; }
                `}</style>

                <div className="marquee">
                  <div
                    className="marquee-track"
                    style={{ animationDuration: `${Math.max(10, dueDates.length * 4)}s` }}
                  >
                    {dueDates.concat(dueDates).map((d, idx) => (
                      <div key={idx} className="marquee-item flex items-center gap-4">
                        <div>
                          <div className="font-medium">{d.title}</div>
                          <div className="text-xs text-gray-500">Details available on selection</div>
                        </div>
                        <div className="text-sm font-medium text-emerald-600">{d.date}</div>
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
