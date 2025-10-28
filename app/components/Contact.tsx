'use client'

export default function Contact() {
  const CardIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 mb-4 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-yellow-400">
      {children}
    </div>
  )

  const PhoneIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.16a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"/>
    </svg>
  )

  const MailIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
  )

  const PinIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )

  const ClockIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  )

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
              <CardIcon><PhoneIcon /></CardIcon>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Telefono</h3>
              <a href="tel:+390551234567" className="text-lg hover:text-yellow-400 transition-colors">
                +39 055 123 4567
              </a>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <CardIcon><MailIcon /></CardIcon>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Email</h3>
              <a href="mailto:info@mvctoscanacarrelli.it" className="text-lg hover:text-yellow-400 transition-colors break-all">
                info@mvctoscanacarrelli.it
              </a>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <CardIcon><PinIcon /></CardIcon>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Indirizzo</h3>
              <p className="text-lg leading-relaxed">
                Via Industriale 123<br/>
                50100 Firenze, Toscana
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              <CardIcon><ClockIcon /></CardIcon>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Orari</h3>
              <p className="text-lg leading-relaxed">
                Lun-Ven: 8:00 - 18:00<br/>
                Sab: 8:00 - 13:00
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Richiedi un Preventivo Gratuito</span>
              <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
