export default function Home() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)',
    }}>
      {/* Top Navigation Menu */}
      <nav className="w-full px-12 py-6">
        <div className="flex justify-center items-center gap-16">
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">HOME</a>
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">CHI SIAMO</a>
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">PRODOTTI</a>
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">SERVIZI</a>
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">RICAMBI</a>
          <a href="#" className="text-white text-lg font-light tracking-wide hover:opacity-80 transition-opacity">CONTATTI</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-7xl font-bold text-white leading-tight">
              MVC TOSCANA<br />CARRELLI
            </h1>
            <p className="text-2xl text-white font-light">
              Vendita e noleggio carrelli elevatori
            </p>
            <p className="text-lg text-white/90 font-light leading-relaxed max-w-xl">
              Offriamo soluzioni complete per la movimentazione delle merci, con un'ampia gamma di carrelli elevatori elettrici, diesel e GPL. Assistenza tecnica e ricambi originali sempre disponibili.
            </p>
          </div>

          {/* Right Side - Forklift Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/DP20-35N3-1000x1000_0.png-removebg-preview.jpg" 
              alt="CAT Forklift" 
              className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-12 py-12">
        <div className="flex justify-center items-center gap-12">
          <span className="text-white text-3xl font-bold tracking-widest">ELETTRICI</span>
          <span className="text-white text-3xl font-bold tracking-widest">DIESEL</span>
          <span className="text-white text-3xl font-bold tracking-widest">TRANSPALLET</span>
          <span className="text-white text-3xl font-bold tracking-widest">MACCHINE PULIZIA</span>
          <span className="text-white text-3xl font-bold tracking-widest">PIATTAFORME</span>
          <span className="text-white text-3xl font-bold tracking-widest">GRU</span>
        </div>
      </div>
    </div>
  );
}
