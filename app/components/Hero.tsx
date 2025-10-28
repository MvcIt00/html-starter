'use client'

export default function Hero() {
  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center text-white py-24">
      {/* Content */}
      <div className="container mx-auto px-8 text-center relative z-10 max-w-6xl">
        <div className="space-y-10">
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
            MVC Toscana Carrelli
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-normal max-w-4xl mx-auto leading-relaxed">
            Vendita, Noleggio e Assistenza Carrelli Elevatori Caterpillar in Toscana
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap pt-8">
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
