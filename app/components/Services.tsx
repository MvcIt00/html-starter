'use client'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💰',
      title: 'Vendita',
      description: 'Carrelli elevatori nuovi e usati certificati Caterpillar. Consulenza gratuita per scegliere il modello ideale per le tue esigenze.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: '🔑',
      title: 'Noleggio',
      description: 'Soluzioni di noleggio flessibili a breve, medio e lungo termine. Disponibilità immediata di carrelli elevatori Caterpillar.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Assistenza e Manutenzione',
      description: 'Servizio tecnico specializzato, ricambi originali e manutenzione programmata per garantire la massima efficienza.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza di movimentazione
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon with gradient background */}
              <div className={`relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Call to action */}
                <button className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text group-hover:underline flex items-center gap-2`}>
                  Scopri di più
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
