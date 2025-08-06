import FullPageCarousel from '@/components/FullPageCarousel'

export default function HomeLayout({ children }) {
  const slides = [
    {
      image: "https://static.wixstatic.com/media/a886de_0fe629df75484824b8844fe6b57e9fed~mv2.jpg/v1/fill/w_1024,h_1024,fp_0.41_0.41,q_90,enc_avif,quality_auto/a886de_0fe629df75484824b8844fe6b57e9fed~mv2.jpg",
      link: "/about",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Sant&apos;Andrea Longevity Center</h1>
          <p className="text-2xl">Vitality & Longevity</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_2c012a7a2eec4442a22069be3c04384a~mv2.jpeg/v1/fill/w_1024,h_1024,fp_0.49_0.46,q_90,enc_avif,quality_auto/a886de_2c012a7a2eec4442a22069be3c04384a~mv2.jpeg",
      link: "/rejuvenation",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Rejuvenation</h1>
          <p className="text-2xl">Piano rigenerativo personalizzato</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_53e1c985adf54f8db3b3ccbffdd36f3b~mv2.jpeg/v1/fill/w_1905,h_1071,fp_0.37_0.46,q_90,enc_avif,quality_auto/a886de_53e1c985adf54f8db3b3ccbffdd36f3b~mv2.jpeg",
      link: "/iv-therapy",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">IV THERAPY</h1>
          <p className="text-2xl">Risveglia la tua vitalità</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_97218817b9b94e519b32260a3bb534bb~mv2.jpg/v1/fill/w_1905,h_1071,fp_0.7_0.46,q_90,enc_avif,quality_auto/a886de_97218817b9b94e519b32260a3bb534bb~mv2.jpg",
      link: "/smart-mind",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Smart Mind</h1>
          <p className="text-2xl">Nuove frontiere delle Neuroscienze</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/11062b_e91a446d54ae47298ae075f6bfbe56c5~mv2.jpg/v1/fill/w_1905,h_1071,fp_0.41_0.28,q_90,enc_avif,quality_auto/11062b_e91a446d54ae47298ae075f6bfbe56c5~mv2.jpg",
      link: "/muscle-therapy",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Muscle Therapy</h1>
          <p className="text-2xl">Potenzia la tua forza interna</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_8e3a8f7a274448f5a36b6d56cffa2aed~mv2.jpg/v1/fill/w_1905,h_1071,fp_0.55_0.5,q_90,enc_avif,quality_auto/a886de_8e3a8f7a274448f5a36b6d56cffa2aed~mv2.jpg",
      link: "/skin-vitality",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Skin Vitality</h1>
          <p className="text-2xl">Il futuro della cura della pelle</p>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_fb8d720cad334bd4984447a23347c8c0~mv2.jpeg/v1/fill/w_1905,h_1071,q_90,enc_avif,quality_auto/a886de_fb8d720cad334bd4984447a23347c8c0~mv2.jpeg",
      link: "https://www.analisisantandrea.it/",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Laboratorio Analisi Sant&apos;Andrea</h1>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_d87d868a78424d9bb9b97afc4558575a~mv2.jpeg/v1/fill/w_1905,h_1071,q_90,enc_avif,quality_auto/a886de_d87d868a78424d9bb9b97afc4558575a~mv2.jpeg",
      link: "https://www.visitespecialistiche.com/?fbclid=IwAR1mrYEG8QeBpfWsObsPGk0vXJzxLs6-WYTBCu7XQUnbBvqZaXzuZmW7a44",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Nuova città Onlus</h1>
        </div>
      )
    },
    {
      image: "https://static.wixstatic.com/media/a886de_473dc193e61c48cfb2c4a3653a9695f5~mv2.jpg/v1/fill/w_1600,h_800,q_90,enc_avif,quality_auto/a886de_473dc193e61c48cfb2c4a3653a9695f5~mv2.jpg",
      link: "https://www.md-fisiosport.com/",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">MD FISIOSPORT</h1>
        </div>
      )
    },
  ]

  return (
    <main className="relative w-screen mx-0 min-h-screen bg-gray-100">
      <FullPageCarousel slides={slides} />
      {children}
    </main>
  )
}