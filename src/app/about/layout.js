import '../globals.css'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: "Sant'Andrea Longevity Center | Longevità Bari | Bari, Metropolitan City of Bari, Italy",
  description: "Il Sant'Andrea Longevity Center, è un laboratorio di ricerca e analisi specializzato nel prevenire l'invecchiamento e rallentare i segni del tempo attraverso programmi personalizzati e mirati al benessere; garantendo uno stile di vita sano e una vita più lunga ",
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