'use client'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Vendita',
      description: 'Carrelli elevatori nuovi e usati certificati Caterpillar. Consulenza gratuita per scegliere il modello ideale per le tue esigenze operative e logistiche.',
    },
    {
      id: 2,
      title: 'Noleggio',
      description: 'Soluzioni di noleggio flessibili a breve, medio e lungo termine. Disponibilità immediata di carrelli elevatori Caterpillar per ogni necessità.',
    },
    {
      id: 3,
      title: 'Assistenza e Manutenzione',
      description: 'Servizio tecnico specializzato, ricambi originali Caterpillar e manutenzione programmata per garantire la massima efficienza dei tuoi mezzi.',
    },
  ]

  return (
    <section id="servizi" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            I Nostri Servizi
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto">
            Soluzioni complete per ogni esigenza di movimentazione
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="space-y-6">
              {/* Elegant minimal card - text only */}
              <div className="bg-white rounded-3xl p-10 hover:shadow-sm transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <a
            href="#contatti"
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Richiedi Preventivo Gratuito
          </a>
        </div>
      </div>
    </section>
  )
}
