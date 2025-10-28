export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#FFCC00] mb-4">MVC Toscana Carrelli</h3>
            <p className="text-gray-300">Partner ufficiale Caterpillar per carrelli elevatori in Toscana</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFCC00]">Contatti</h4>
            <p className="text-gray-300 mb-2">☎️ +39 055 123 4567</p>
            <p className="text-gray-300">✉️ info@mvctoscanacarrelli.it</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFCC00]">Seguici</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-[#FFCC00] transition-colors">👥</a>
              <a href="#" className="text-2xl hover:text-[#FFCC00] transition-colors">📧</a>
              <a href="#" className="text-2xl hover:text-[#FFCC00] transition-colors">📱</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MVC Toscana Carrelli. Tutti i diritti riservati.</p>
          <p className="mt-2 text-sm">Caterpillar® è un marchio registrato di Caterpillar Inc.</p>
        </div>
      </div>
    </footer>
  )
}
