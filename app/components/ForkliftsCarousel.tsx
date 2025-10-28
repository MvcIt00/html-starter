'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function ForkliftsCarousel() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const forklifts = [
    { id: 1, name: 'Cat EP16NT', type: 'Elettrici', capacity: '1.6T', color: '#2563eb', image: '/carrelli/Elettrico-48V-3ruote-Photoroom.jpg' },
    { id: 2, name: 'Cat GP25N', type: 'Diesel', capacity: '2.5T', color: '#1f2937' },
    { id: 3, name: 'TP20', type: 'Transpallet', capacity: '2.0T', color: '#10b981' },
    { id: 4, name: 'STK16', type: 'Stoccatori', capacity: '1.6T', color: '#f59e0b' },
    { id: 5, name: 'Cat DP80N', type: 'Grandi Portate', capacity: '8.0T', color: '#ef4444' },
    { id: 6, name: 'SC100', type: 'Macchine Pulizia', capacity: 'N/A', color: '#06b6d4' },
    { id: 7, name: 'PTF15', type: 'Piattaforme', capacity: '1.5T', color: '#8b5cf6' },
    { id: 8, name: 'CR50', type: 'Gru', capacity: '5.0T', color: '#ec4899' },
    { id: 9, name: 'RCK20', type: 'Scaffalature', capacity: '2.0T', color: '#6366f1' },
  ]

  // Apple Dock hover effect
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const center = rect.left + rect.width / 2
        const distance = Math.abs(e.clientX - center)
        const scale = Math.max(1, 1.5 - distance / 300)
        const translateY = Math.max(-20, -distance / 15)
        item.style.transform = `translateY(${translateY}px) scale(${scale.toFixed(2)})`
        item.style.zIndex = String(Math.floor(scale * 100))
      })
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', () => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        item.style.transform = 'translateY(0) scale(1)'
        item.style.zIndex = '0'
      })
    })
    return () => {
      el.removeEventListener('mousemove', handleMove)
    }
  }, [])

  // Card content data for 5-6 machines per category (by capacity bands)
  const electricRanges = [
    { band: '1.3 - 1.6T', models: ['EP13NT', 'EP16NT'], img: '/carrelli/Elettrico-48V-3ruote-Photoroom.jpg' },
    { band: '1.8 - 2.0T', models: ['EP18NT', 'EP20NT'], img: '/carrelli/Elettrico-48V-3ruote-Photoroom.jpg' },
    { band: '2.5 - 3.0T', models: ['EP25', 'EP30'], img: '/carrelli/Elettrico-48V-3ruote-Photoroom.jpg' },
  ]

  return (
    <div className="px-4">
      <section ref={containerRef} className="mx-auto mt-10 flex items-end justify-center gap-4">
        {forklifts.map(f => (
          <button
            key={f.id}
            data-dock-item
            onClick={() => setActiveId(f.id)}
            className="group relative isolate rounded-2xl bg-white/70 ring-1 ring-black/5 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ borderTop: `3px solid ${f.color}` }}
          >
            <div className="p-4 flex flex-col items-center min-w-28">
              {f.image ? (
                <Image alt={f.name} src={f.image} width={110} height={85} className="object-contain drop-shadow" />
              ) : (
                <div className="h-[85px] w-[110px] rounded-xl" style={{ background: f.color }} />
              )}
              <div className="mt-2 text-center">
                <div className="text-sm font-semibold text-gray-900 leading-tight">{f.name}</div>
                <div className="text-xs text-gray-600">{f.type} • {f.capacity}</div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </section>

      {/* Modal Card */}
      {activeId && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveId(null)} />
          <div className="relative w-full max-w-4xl origin-center rounded-3xl bg-white/95 ring-1 ring-black/5 shadow-2xl animate-[scaleIn_160ms_cubic-bezier(0.16,1,0.3,1)]">
            <div className="p-6 sm:p-8">
              {(() => {
                const f = forklifts.find(x => x.id === activeId)!
                const title = `${f.type} · ${f.name}`
                return (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{f.type}</h3>
                        <p className="text-gray-600">Seleziona per portata: 5-6 modelli organizzati per fascia.</p>
                      </div>
                      <button onClick={() => setActiveId(null)} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm hover:bg-gray-50">Chiudi</button>
                    </div>

                    {/* Capacity bands grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {electricRanges.map((band, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                          <div className="p-4 flex items-center gap-4">
                            <div className="shrink-0">
                              <Image src={band.img} alt={band.band} width={96} height={72} className="object-contain drop-shadow" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{band.band}</div>
                              <div className="mt-1 text-xs text-gray-600">{band.models.join(' • ')}</div>
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-gray-50/90 to-transparent" />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <a href="#contatti" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white shadow hover:bg-black">
                        Richiedi informazioni
                      </a>
                      <div className="text-xs text-gray-500">Animazioni smooth, ombre morbide, stile ispirato ad Apple.</div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scaleIn { from { transform: scale(.96); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  )
}
