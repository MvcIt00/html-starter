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

        {/* Contact Info Grid - SVG Icons Only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Phone */}
          <div className="flex flex-col items-center text-center space-y-4">
            <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefono</h3>
              <p className="text-base text-gray-600">+39 0573 123456</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center space-y-4">
            <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-base text-gray-600">info@mvctoscana.it</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center space-y-4">
            <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sede</h3>
              <p className="text-base text-gray-600">
                Via Industriale, 123<br />
                51100 Pistoia (PT)<br />
                Toscana, Italia
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center space-y-4">
            <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Orari</h3>
              <p className="text-base text-gray-600">
                Lun-Ven: 8:00 - 18:00<br />
                Sab: 8:00 - 12:00<br />
                Dom: Chiuso
              </p>
            </div>
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
                className="px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-200"
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
