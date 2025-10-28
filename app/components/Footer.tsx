export default function Footer() {
  const IconWrap = ({ children }: { children: React.ReactNode }) => (
    <span className="w-5 h-5 text-current inline-block" aria-hidden>
      {children}
    </span>
  )

  const Facebook = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12a10 10 0 1 0-11.563 9.874v-6.984H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.984A10.002 10.002 0 0 0 22 12Z"/></svg>
  )
  const Instagram = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
  )
  const LinkedIn = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.11h.05c.53-1 1.83-2.11 3.77-2.11C20.67 8.5 22 11 22 14.66V24h-4v-7.93c0-1.89-.03-4.32-2.64-4.32-2.64 0-3.04 2.06-3.04 4.18V24h-4V8.5z"/></svg>
  )
  const Phone = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.16a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"/></svg>
  )
  const Mail = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
  )
  const Pin = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  )

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text mb-4">
              MVC Toscana Carrelli
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Partner ufficiale Caterpillar per carrelli elevatori in Toscana.
              Offriamo soluzioni complete di vendita, noleggio e assistenza con oltre 20 anni di esperienza nel settore.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm" aria-label="Facebook">
                <IconWrap><Facebook /></IconWrap>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm" aria-label="Instagram">
                <IconWrap><Instagram /></IconWrap>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm" aria-label="LinkedIn">
                <IconWrap><LinkedIn /></IconWrap>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Link Utili</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" href="#servizi">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Catalogo Prodotti
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" href="#contatti">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Contattaci
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Chi Siamo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contatti</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start gap-2 hover:text-white transition-colors">
                <IconWrap><Phone /></IconWrap>
                <a href="tel:+390551234567">+39 055 123 4567</a>
              </p>
              <p className="flex items-start gap-2 hover:text-white transition-colors break-all">
                <IconWrap><Mail /></IconWrap>
                <a href="mailto:info@mvctoscanacarrelli.it">info@mvctoscanacarrelli.it</a>
              </p>
              <p className="flex items-start gap-2">
                <IconWrap><Pin /></IconWrap>
                <span>Via Industriale 123<br/>50100 Firenze, Toscana</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} MVC Toscana Carrelli. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
              <a className="hover:text-white transition-colors" href="#">Termini di Servizio</a>
            </div>
          </div>
          <p className="text-center mt-4 text-xs text-gray-600">Caterpillar® è un marchio registrato di Caterpillar Inc.</p>
        </div>
      </div>
    </footer>
  )
}
