'use client'
import { useState } from 'react'

export default function ForkliftsCarousel() {
  const forklifts = [
    { id: 1, name: 'Cat GP25N', type: 'Diesel', capacity: '2.5T', image: '🏗️' },
    { id: 2, name: 'Cat EP16NT', type: 'Elettrico', capacity: '1.6T', image: '⚡' },
    { id: 3, name: 'Cat DP35N', type: 'Diesel', capacity: '3.5T', image: '🏗️' },
    { id: 4, name: 'Cat EP20NT', type: 'Elettrico', capacity: '2.0T', image: '⚡' },
    { id: 5, name: 'Cat GP40N', type: 'Diesel', capacity: '4.0T', image: '🏗️' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003366]">
          I Nostri Carrelli Elevatori
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {forklifts.map((forklift) => (
            <div key={forklift.id} className="flex-none w-80 bg-white rounded-lg shadow-lg p-6 snap-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4 text-center">{forklift.image}</div>
              <h3 className="text-2xl font-bold mb-2 text-[#003366]">{forklift.name}</h3>
              <p className="text-gray-600 mb-2">Tipo: {forklift.type}</p>
              <p className="text-lg font-semibold text-[#FFCC00]">Capacità: {forklift.capacity}</p>
              <button className="mt-4 w-full bg-[#FFCC00] text-[#003366] py-2 rounded font-semibold hover:bg-[#e6b800] transition-colors">
                Scopri di più
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
