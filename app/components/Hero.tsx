'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-gray-900 py-24">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Content */}
      <div className="container mx-auto px-8 text-center relative z-10 max-w-6xl">
        <div className="space-y-10">
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
            MVC Toscana Carrelli
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 font-normal max-w-4xl mx-auto leading-relaxed">
            Vendita, Noleggio e Assistenza Carrelli Elevatori Caterpillar in Toscana
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap pt-8">
            <a 
              href="#contatti" 
              className="px-8 py-3 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Richiedi Preventivo
            </a>
            <a 
              href="#servizi" 
              className="px-8 py-3 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              Scopri i Servizi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
