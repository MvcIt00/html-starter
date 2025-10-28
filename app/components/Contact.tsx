'use client'

export default function Contact() {
  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-[#003366] to-[#004488] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contattaci
        </h2>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFCC00]">☎️ Telefono</h3>
              <p className="text-lg">+39 055 123 4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFCC00]">✉️ Email</h3>
              <p className="text-lg">info@mvctoscanacarrelli.it</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFCC00]">📍 Indirizzo</h3>
              <p className="text-lg">Via Industriale 123<br/>50100 Firenze, Toscana</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFCC00]">🕒 Orari</h3>
              <p className="text-lg">Lun-Ven: 8:00 - 18:00<br/>Sab: 8:00 - 13:00</p>
            </div>
          </div>
          <div className="text-center">
            <button className="btn-primary text-lg">
              Richiedi un Preventivo Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
