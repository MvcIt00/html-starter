'use client'

import { useState } from 'react'
import Hero from './components/Hero'
import ForkliftsCarousel from './components/ForkliftsCarousel'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  const categories = ['Tutti', 'Elettrici', 'Diesel', 'GPL', 'Retrattili', 'Carrelli elevatori']

  return (
    <main className="min-h-screen">
      {/* Main flex container */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12">
        {/* Left section: Hero */}
        <div className="lg:w-1/2">
          <Hero />
          
          {/* Categories list - horizontal below hero on mobile, beside on desktop */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Categorie</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right section: Selected vehicle display */}
        <div className="lg:w-1/2 bg-gray-100 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
          {selectedVehicle ? (
            <div className="text-center">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="max-w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedVehicle.name}</h3>
              <p className="text-gray-600">{selectedVehicle.description}</p>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p className="text-lg">Seleziona una categoria per visualizzare i mezzi</p>
              <p className="text-sm mt-2">Categoria attuale: {selectedCategory}</p>
            </div>
          )}
        </div>
      </div>

      {/* Other sections */}
      <ForkliftsCarousel onVehicleSelect={setSelectedVehicle} selectedCategory={selectedCategory} />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
