'use client'

export default function Contact() {
  return (
    <section id="contatti" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Contattaci
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto">
            Siamo a tua disposizione per ogni necessità
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Phone */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Telefono</h3>
            <p className="text-base text-gray-600">+39 0573 123456</p>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-base text-gray-600">info@mvctoscana.it</p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Sede</h3>
            <p className="text-base text-gray-600">
              Via Industriale, 123<br />
              51100 Pistoia (PT)<br />
              Toscana, Italia
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Orari</h3>
            <p className="text-base text-gray-600">
              Lun-Ven: 8:00 - 18:00<br />
              Sab: 8:00 - 12:00<br />
              Dom: Chiuso
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                  placeholder="La tua email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                placeholder="Il tuo telefono"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all resize-none"
                placeholder="Come possiamo aiutarti?"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Invia Messaggio
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
