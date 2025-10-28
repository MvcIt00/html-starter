export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💰',
      title: 'Vendita',
      description: 'Carrelli elevatori nuovi e usati certificati Caterpillar. Consulenza gratuita per scegliere il modello ideale per le tue esigenze.'
    },
    {
      id: 2,
      icon: '🔑',
      title: 'Noleggio',
      description: 'Soluzioni di noleggio flessibili a breve, medio e lungo termine. Disponibilità immediata di carrelli elevatori Caterpillar.'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Assistenza e Manutenzione',
      description: 'Servizio tecnico specializzato, ricambi originali e manutenzione programmata per garantire la massima efficienza.'
    }
  ]

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#003366]">
          I Nostri Servizi
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
