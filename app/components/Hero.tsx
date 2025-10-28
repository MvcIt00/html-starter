'use client'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#004488] text-white">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          MVC Toscana Carrelli
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Vendita e Noleggio Carrelli Elevatori Caterpillar in Toscana
        </p>
        <button className="btn-primary text-lg">
          Richiedi Preventivo
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
