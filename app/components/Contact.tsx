'use client'

export default function Contact() {
  return (
    <section id="contatti" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Contattaci
          </h2>
          <p className="text-xl text-gray-300">
            Siamo qui per aiutarti a trovare la soluzione perfetta
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">☎️</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Telefono</h3>
              <a href="tel:+390551234567" className="text-lg hover:text-yellow-400 transition-colors">
                +39 055 123 4567
              </a>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">✉️</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Email</h3>
              <a href="mailto:info@mvctoscanacarrelli.it" className="text-lg hover:text-yellow-400 transition-colors break-all">
                info@mvctoscanacarrelli.it
              </a>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📍</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Indirizzo</h3>
              <p className="text-lg leading-relaxed">
                Via Industriale 123<br />
                50100 Firenze, Toscana
              </p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🕒</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Orari</h3>
              <p className="text-lg leading-relaxed">
                Lun-Ven: 8:00 - 18:00<br />
                Sab: 8:00 - 13:00
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Richiedi un Preventivo Gratuito</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <p className="mt-4 text-gray-400 text-sm">
              Risponderemo entro 24 ore
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
