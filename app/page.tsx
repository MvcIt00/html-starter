import Hero from './components/Hero'
import ForkliftsCarousel from './components/ForkliftsCarousel'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForkliftsCarousel />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
