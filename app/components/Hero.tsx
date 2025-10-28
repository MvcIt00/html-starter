'use client'
export default function Hero() {
  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center py-24">
      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="space-y-8 text-left w-full md:w-[35%]">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-white">
            MVC Toscana Carrelli
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-normal leading-relaxed">
            Vendita, Noleggio e Assistenza Carrelli Elevatori Caterpillar in Toscana
          </p>
          
          <div className="flex gap-6 flex-wrap pt-6">
            <a 
              href="#contatti"
              className="px-8 py-4 text-lg font-medium text-blue-900 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Richiedi Preventivo
            </a>
            <a 
              href="#servizi"
              className="px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Scopri i Servizi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
