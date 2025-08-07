/* eslint-disable @next/next/no-page-custom-font */
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Centro Diagnostico Sant'Andrea - Laboratorio Analisi Sant'Andrea",
  description: "Il centro Diagnostico Sant’Andrea e' un network di competenze e tecnologie sanitarie che mirano ad garantire assistenza sanitaria di qualità e vicina ai pazienti.",
  keywords: "laboratorio analisi Bari, esami pillola, colesterolo, breath test lattosio, vegani, longevity, checkup bari",
  generator: "Next.js, React, Tailwind CSS, Vercel",
}

export default function RootLayout({ children }) {

  return (
    <html lang="it">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}