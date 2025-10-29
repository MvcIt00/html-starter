'use client'

export default function Hero() {
  const categories = [
    'ELETTRICI',
    'DIESEL',
    'TRANSPALLET',
    'MACCHINE PULIZIA',
    'PIATTAFORME',
    'GRU'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-8 py-16 flex flex-col justify-center items-center">
        {/* Title and Description */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight text-white">
            MVC TOSCANA CARRELLI
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light">
            Vendita, Noleggio e Assistenza Carrelli Elevatori
          </p>
        </div>

        {/* CAT Forklift Image */}
        <div className="flex justify-center items-center my-8">
          <img 
            src="/images/forklift-cat.png" 
            alt="CAT Forklift" 
            className="max-w-2xl w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Product Categories */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-4 text-white font-semibold text-lg bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
