import '../globals.css'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: "CHI SIAMO - Laboratorio Analisi Sant'Andrea",
  description: "Il centro Diagnostico Sant’Andrea e' un network di competenze e tecnologie sanitarie che mirano ad garantire assistenza sanitaria di qualità e vicina ai pazienti.",
}

export default function RootLayout({ children }) {

  return (
    <html lang="it">
      <body>
        <Navbar />
        <main className="mx-auto w-full p-4 container">
          {children}
        </main>
      </body>
    </html>
  )
}