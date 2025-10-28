'use client'
import { useState } from 'react'
import Hero from './components/Hero'
import ForkliftsCarousel from './components/ForkliftsCarousel'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

interface Vehicle {
  id: number
  name: string
  description: string
  image: string
  category: string
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  
  const categories = ['Tutti', 'Elettrici', 'Diesel', 'GPL', 'Retrattili', 'Carrelli elevatori']
  
  const vehicles: Vehicle[] = [
    { id: 1, name: 'Carrello Elettrico E25', description: 'Carrello elevatore elettrico da 2.5 tonnellate, ideale per ambienti interni', image: '/images/elettrico1.jpg', category: 'Elettrici' },
    { id: 2, name: 'Carrello Elettrico E30', description: 'Carrello elevatore elettrico da 3.0 tonnellate con batteria al litio', image: '/images/elettrico2.jpg', category: 'Elettrici' },
    { id: 3, name: 'Carrello Diesel D35', description: 'Carrello elevatore diesel da 3.5 tonnellate per uso esterno', image: '/images/diesel1.jpg', category: 'Diesel' },
    { id: 4, name: 'Carrello Diesel D50', description: 'Carrello elevatore diesel da 5.0 tonnellate ad alte prestazioni', image: '/images/diesel2.jpg', category: 'Diesel' },
    { id: 5, name: 'Carrello GPL G25', description: 'Carrello elevatore a GPL da 2.5 tonnellate, zero emissioni', image: '/images/gpl1.jpg', category: 'GPL' },
    { id: 6, name: 'Carrello GPL G32', description: 'Carrello elevatore a GPL da 3.2 tonnellate con cabina', image: '/images/gpl2.jpg', category: 'GPL' },
    { id: 7, name: 'Retrattile R16', description: 'Carrello retrattile da 1.6 tonnellate per corridoi stretti', image: '/images/retrattile1.jpg', category: 'Retrattili' },
    { id: 8, name: 'Retrattile R20', description: 'Carrello retrattile da 2.0 tonnellate con sollevamento 12m', image: '/images/retrattile2.jpg', category: 'Retrattili' },
    { id: 9, name: 'Elevatore Standard ES18', description: 'Carrello elevatore standard da 1.8 tonnellate', image: '/images/standard1.jpg', category: 'Carrelli elevatori' },
    { id: 10, name: 'Elevatore Standard ES25', description: 'Carrello elevatore standard da 2.5 tonnellate multifunzione', image: '/images/standard2.jpg', category: 'Carrelli elevatori' }
  ]

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    
    if (category === 'Tutti') {
      setSelectedVehicle(vehicles[0])
    } else {
      const vehicleInCategory = vehicles.find(v => v.category === category)
      setSelectedVehicle(vehicleInCategory || null)
    }
  }

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
                  onClick={() => handleCategoryClick(category)}
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
