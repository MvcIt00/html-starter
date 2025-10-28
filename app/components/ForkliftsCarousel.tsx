'use client'
import { useRef, useState, useEffect } from 'react'

export default function ForkliftsCarousel() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const forklifts = [
    { id: 1, name: 'Cat GP25N', type: 'Diesel', capacity: '2.5T', color: '#1f2937' },
    { id: 2, name: 'Cat EP16NT', type: 'Elettrico', capacity: '1.6T', color: '#2563eb' },
    { id: 3, name: 'Cat DP35N', type: 'Diesel', capacity: '3.5T', color: '#111827' },
    { id: 4, name: 'Cat EP20NT', type: 'Elettrico', capacity: '2.0T', color: '#1d4ed8' },
    { id: 5, name: 'Cat GP40N', type: 'Diesel', capacity: '4.0T', color: '#0f172a' },
  ]

  // Mac Dock hover effect: scale items based on mouse proximity
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const center = rect.left + rect.width / 2
        const distance = Math.abs(e.clientX - center)
        const scale = Math.max(1, 1.6 - distance / 250) // smooth falloff
        item.style.transform = `translateY(-8px) scale(${scale.toFixed(2)})`
        item.style.zIndex = String(Math.floor(scale * 100))
      })
    }
    const reset = () => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        item.style.transform = ''
        item.style.zIndex = ''
      })
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])

  const ForkliftSVG = ({ color = '#111827' }: { color?: string }) => (
    <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="28" width="40" height="12" rx="6" fill={color} opacity="0.15" />
      <rect x="22" y="10" width="6" height="22" rx="2" fill={color} />
      <rect x="28" y="14" width="10" height="4" rx="1" fill={color} />
      <rect x="40" y="10" width="4" height="26" rx="1" fill={color} />
      <rect x="46" y="8" width="3" height="28" rx="1" fill={color} />
      <circle cx="18" cy="44" r="6" fill={color} />
      <circle cx="38" cy="44" r="6" fill={color} />
      <rect x="50" y="12" width="2" height="28" rx="1" fill={color} />
    </svg>
  )

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Gamma Carrelli Elevatori
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Immagini sospese con effetto dock su hover. Clicca per aprire la scheda dettagli.
        </p>

        <div ref={containerRef} className="relative flex items-end justify-center gap-6 overflow-x-auto pb-10 snap-x snap-mandatory">
          {forklifts.map(f => (
            <button
              key={f.id}
              data-dock-item
              onClick={() => setActiveId(f.id)}
              className="group relative flex-none snap-center"
              style={{ transition: 'transform 180ms ease' }}
            >
              <div className="relative -mb-6">
                {/* suspended image shadow */}
                <div className="absolute inset-x-6 -bottom-2 h-4 rounded-full bg-black/10 blur-md" />
                <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <ForkliftSVG color={f.color} />
                </div>
              </div>
              <div className="text-center mt-6">
                <div className="text-sm font-semibold text-gray-900">{f.name}</div>
                <div className="text-xs text-gray-500">{f.type} • {f.capacity}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Elegant card modal */}
        {activeId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveId(null)} />
            <div className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden animate-[fadeIn_200ms_ease]">
              <div className="p-8">
                {(() => {
                  const f = forklifts.find(x => x.id === activeId)!
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                      <div className="sm:col-span-1 mx-auto">
                        <ForkliftSVG color={f.color} />
                      </div>
                      <div className="sm:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{f.name}</h3>
                        <p className="text-gray-600 mb-4">Tipologia: {f.type} • Capacità: {f.capacity}</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Motore ad alta efficienza e ridotta manutenzione</li>
                          <li>Visibilità ottimizzata e comfort operatore</li>
                          <li>Sistemi di sicurezza avanzati</li>
                        </ul>
                        <div className="mt-6 flex gap-3">
                          <button onClick={() => setActiveId(null)} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Chiudi</button>
                          <a href="#contatti" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Richiedi informazioni</a>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
