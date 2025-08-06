/* eslint-disable @next/next/no-img-element */
"use client";
import Head from "next/head";
import { useRef, useEffect } from "react";

export default function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <Head>
        <title>La nostra Missione | Sant&apos;Andrea Longevity Center</title>
        <meta
          name="description"
          content="Scopri la missione del Sant'Andrea Longevity Center: terapie innovative per rallentare l'invecchiamento."
        />
      </Head>
      <section className="w-screen min-h-screen bg-white flex flex-col items-center mt-[150px]">
        <div
          className="flex flex-col items-center w-full opacity-0 translate-y-8 animate-fadeInUp"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <img
            src="https://static.wixstatic.com/media/a886de_9d9e4e610e1145688ab3052391cc9482~mv2.png/v1/fill/w_270,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a886de_9d9e4e610e1145688ab3052391cc9482~mv2.png"
            alt="Sant'Andrea Longevity Center"
          />

          <div className="relative mt-5 w-full max-w-4xl h-32 flex items-center justify-center">
            {/* SVG con clipPath */}
            <svg
              width="100%"
              height="140"
              viewBox="0 0 1000 95"
              className="absolute inset-0"
            >
              <defs>
                <clipPath id="textClip">
                  <text
                    x="500"
                    y="98"
                    textAnchor="middle"
                    fontSize="120"
                    fontFamily="Oswald, Arial, sans-serif"
                    fontWeight="bold"
                    letterSpacing="2px"
                  >
                    IL NOSTRO CENTRO
                  </text>
                </clipPath>
              </defs>

              {/* Video come foreignObject dentro SVG */}
              <foreignObject
                width="100%"
                height="100%"
                clipPath="url(#textClip)"
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://video.wixstatic.com/video/11062b_407e13c69b8041af88725714590d991a/720p/mp4/file.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%" }}
                />
              </foreignObject>

              {/* Bordo bianco */}
              <text
                x="500"
                y="98"
                textAnchor="middle"
                fontSize="120"
                fontFamily="Oswald, Arial, sans-serif"
                fontWeight="bold"
                letterSpacing="2px"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                IL NOSTRO CENTRO
              </text>
            </svg>
          </div>
        </div>

        <div className="w-full mt-7 px-4 py-8 text-justify flex justify-center gap-8">
          <div className="max-w-4xl">
            <p>
              Da millenni, l'Umanità anela a trovare il modo per affrontare il
              passare del tempo; questo è confermato dall’esistenza di diversi
              miti, da quello del Puer Aeternus a quello dell’elisir di lunga
              vita. In un'epoca in cui il mondo sta invecchiando rapidamente, ci
              troviamo di fronte ad una sfida affascinante: come possiamo vivere
              più a lungo, ma soprattutto, come possiamo farlo mantenendo la
              vitalità e la gioia di esistere? L’invecchiamento è un processo
              che colpisce tutti indistintamente ed è «la madre di tutte le
              malattie» come afferma lo Scienziato David Sinclair. ​A livello
              mondiale, infatti, si ricercano da anni i possibili biomarcatori
              dell’invecchiamento, ovvero molecole che si possano facilmente
              identificare nei nostri tessuti per arrivare a definire l’età
              biologica che indica lo stato di salute del nostro organismo,
              distinguendosi dalla semplice età cronologica. Il Sant’Andrea
              Longevity Center nasce, quindi, con l’obiettivo di occuparsi di
              questo campo della Medicina ancora poco esplorato: la Scienza
              della Longevità. È nella lotta alle malattie associate all’età che
              si pone la nostra quotidiana attività: promuovere il
              ringiovanimento fisiologico mediante la medicina preventiva e di
              precisione. L’obiettivo? Rimanere in salute e in forma fisica e
              mentale più a lungo. Oscar Wild sosteneva: “Con l'età si impara
              quanto è bello aver mantenuto il proprio entusiasmo”,
              sottolineando il concetto secondo il quale il giusto approccio
              psicologico nel combattere l’età che avanza è già la prima vera
              cura. Trovare e mantenere il proprio “ikigai” (il senso della vita
              secondo la cultura giapponese) è il primo passo per fortificare
              l’organo di comando del nostro corpo: il cervello. Il nostro
              centro, pertanto, è pronto ad offrirti il massimo racchiuso in una
              combinazione vincente: diagnostica sempre aggiornata, terapeutica
              innovativa e un sostegno relazionale medico-paziente per portare
              indietro le lancette del tuo orologio. Vieni a trovarci, un team
              di professionisti è pronto ad accoglierti!
            </p>
          </div>
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://static.wixstatic.com/media/a886de_f9b0ee233a4844739b6a0bc1400ae033~mv2.png/v1/fill/w_580,h_980,fp_0.46_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GENOMA%20VETTORIALE.png"
              alt="Sant'Andrea Longevity Center Logo"
            />
          </div>
        </div>
      </section>
      <section className="w-screen min-h-[400px] bg-white px-36 justify-center flex flex-col md:flex-row mt-10 items-center md:items-stretch">
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <video
            className="w-full h-full object-cover rounded shadow-lg"
            src="https://video.wixstatic.com/video/a886de_68f782b3e5ca48ddb05ff9eaa043f7ac/720p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:py-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            La nostra <strong className="text-blue-600">Missione</strong>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            La nostra Mission è identificare e sviluppare{" "}
            <b>terapie innovative</b> e non invasive{" "}
            <b>per rallentare il processo di invecchiamento</b>, avvalendoci di
            ricerche all&apos;avanguardia nel campo del ringiovanimento
            fisiologico.
            <br />
            <br />
            Ci concentriamo sull&apos;adozione di un approccio gestaltico che
            integra trattamenti medici, terapie alternative e uno stile di vita
            sano, offrendo al paziente un approccio personalizzato che tenga
            anche in considerazione l’aspetto relazionale con il medico.
          </p>
        </div>
      </section>
      <section className="w-screen min-h-[400px] px-36 bg-white flex flex-col md:flex-row mt-10 items-center md:items-stretch">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:py-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            La nostra <strong className="text-blue-500">Visione</strong>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            La nostra Vision è quella di ridefinire l&apos;invecchiamento come
            un&apos;opportunità per abbracciare la vitalità, attraverso pratiche che
            favoriscano il ringiovanimento fisiologico e terapie innovative,
            consentendo a tutti di godere di una vita lunga e in salute. Ci
            impegniamo a trasformare il concetto di Longevità, aprendo le porte
            a un&apos;esperienza di vita attiva, piena di energia e benessere.{" "}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <video
            className="w-full h-full object-cover rounded shadow-lg"
            src="https://video.wixstatic.com/video/a886de_cf453aae03064845b538822329d26129/720p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </section>
    </>
  );
}
