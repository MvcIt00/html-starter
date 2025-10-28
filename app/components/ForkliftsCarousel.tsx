'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function ForkliftsCarousel() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const forklifts = [
    { id: 1, name: 'Cat EP16NT', type: 'Elettrici', capacity: '1.6T', image: '/carrelli/Elettrico-48V-3ruote-Photoroom.jpg' },
    { id: 2, name: 'Cat GP25N', type: 'Diesel', capacity: '2.5T' },
    { id: 3, name: 'TP20', type: 'Transpallet', capacity: '2.0T' },
    { id: 4, name: 'STK16', type: 'Stoccatori', capacity: '1.6T' },
    { id: 5, name: 'Cat DP80N', type: 'Grandi Portate', capacity: '8.0T' },
    { id: 6, name: 'SC100', type: 'Macchine Pulizia', capacity: 'N/A' },
    { id: 7, name: 'PTF15', type: 'Piattaforme', capacity: '1.5T' },
    { id: 8, name: 'CR50', type: 'Gru', capacity: '5.0T' },
    { id: 9, name: 'RCK20', type: 'Scaffalature', capacity: '2.0T' },
  ]

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const center = rect.left + rect.width / 2
        const distance = Math.abs(e.clientX - center)
        const scale = Math.max(1, 1.4 - distance / 350)
        const translateY = Math.max(-15, -distance / 20)
        item.style.transform = `translateY(${translateY}px) scale(${scale.toFixed(2)})`
        item.style.zIndex = String(Math.floor(scale * 100))
      })
    }

    const handleLeave = () => {
      const items = Array.from(el.querySelectorAll('[data-dock-item]')) as HTMLElement[]
      items.forEach(item => {
        item.style.transform = 'translateY(0) scale(1)'
        item.style.zIndex = '1'
      })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section id="carrelli" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Carrelli Elevatori Caterpillar
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto">
            Esplora la nostra gamma completa di carrelli elevatori per ogni esigenza
          </p>
        </div>

        {/* Carousel - Borderless Floating Dock Style */}
        <div
          ref={containerRef}
          className="flex items-end justify-center gap-6 py-12 px-8 overflow-x-auto"
        >
          {forklifts.map((forklift) => (
            <button
              key={forklift.id}
              data-dock-item
              onClick={() => setActiveId(forklift.id)}
              className="flex flex-col items-center transition-all duration-300 ease-out focus:outline-none"
              style={{ transformOrigin: 'bottom center' }}
            >
              <div className="w-28 h-28 rounded-3xl bg-gray-100 flex items-center justify-center mb-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {forklift.image ? (
                  <Image
                    src={forklift.image}
                    alt={forklift.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  <div className="text-4xl text-gray-400">🚜</div>
                )}
              </div>
              <span className="text-sm font-normal text-gray-700">{forklift.type}</span>
            </button>
          ))}
        </div>

        {/* Active Forklift Details */}
        {activeId && (
          <div className="mt-16 text-center space-y-6 animate-fade-in">
            {(() => {
              const active = forklifts.find(f => f.id === activeId)
              return active ? (
                <>
                  <h3 className="text-3xl font-semibold text-gray-900">{active.name}</h3>
                  <p className="text-xl text-gray-600">
                    {active.type} - Capacità {active.capacity}
                  </p>
                  <a
                    href="#contatti"
                    className="inline-block mt-6 px-8 py-3 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    Richiedi Informazioni
                  </a>
                </>
              ) : null
            })()}
          </div>
        )}
      </div>
    </section>
  )
}
