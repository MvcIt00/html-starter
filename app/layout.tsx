import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'MVC Toscana Carrelli - Vendita e Noleggio Carrelli Elevatori',
  description: 'MVC Toscana Carrelli: vendita e noleggio carrelli elevatori Caterpillar in Toscana. Servizi professionali e assistenza dedicata.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
