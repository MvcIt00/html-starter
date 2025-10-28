export default function Footer() {
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
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Facebook"
              >
                👥
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Link Utili</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servizi" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Catalogo Prodotti
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  Contattaci
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
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
                <span>☎️</span>
                <a href="tel:+390551234567">+39 055 123 4567</a>
              </p>
              <p className="flex items-start gap-2 hover:text-white transition-colors break-all">
                <span>✉️</span>
                <a href="mailto:info@mvctoscanacarrelli.it">info@mvctoscanacarrelli.it</a>
              </p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Via Industriale 123<br />50100 Firenze, Toscana</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} MVC Toscana Carrelli. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
            </div>
          </div>
          <p className="text-center mt-4 text-xs text-gray-600">
            Caterpillar® è un marchio registrato di Caterpillar Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
