import FullPageCarousel from '@/components/FullPageCarousel'

export default function HomeLayout({ children }) {
  const slides = [
    {
      image: "https://analisisantandrea.it/images/Longevity_x_SantAndrea.png",
      link: "https://www.longevitycenter.it/",
      content: ""
    },
    {
      image: "https://analisisantandrea.it/images/Elan_Vital_per_sito_web_1.png",
      link: "https://www.elanvitalonlus.com/",
      content: ""
    },
    {
      image: "https://analisisantandrea.it/images/Elan__Longevity__x_Andrea_1.png",
      link: "https://www.md-fisiosport.com/",
      content: ""
    },
    {
      image: "https://analisisantandrea.it/images/MEDICINADELLAVORO.png",
      link: "/medicina-del-lavoro",
      content: ""
    }
  ]

  return (
    <main className="relative w-screen mx-0 min-h-screen">
      <FullPageCarousel slides={slides} />
      {children}
    </main>
  )
}