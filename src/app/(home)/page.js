/* eslint-disable @next/next/no-img-element */
import {
  FaMicroscope, // DIAGNOSTICA DI LABORATORIO
  FaClipboardCheck, // I NOSTRI CHECK UP
  FaDna, // FARMACOLOGIA - TOSSICOLOGIA
  FaVial, // PRELIEVI A DOMICILIO
  FaHospital, // POLIAMBULATORIO
  FaLaptopMedical, // TELEMEDICINA
} from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-[5%] mt-[3%] mb-[3%] gap-4 w-[72%]">
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaMicroscope size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              Diagnostica di laboratorio
            </p>
          </div>
        </div>
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaClipboardCheck size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              I nostri check up
            </p>
          </div>
        </div>
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaDna size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              Farmacologia-Tossicologia
            </p>
          </div>
        </div>
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaVial size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              Prelievi a domicilio
            </p>
          </div>
        </div>
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaHospital size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              Poliambulatorio
            </p>
          </div>
        </div>
        <div className="h-[60px] p-6 bg-[#1073b6] text-white gap-4 rounded-md flex items-center justify-center">
          <div>
            <FaLaptopMedical size={40} />
          </div>
          <div>
            <p className="text-center text-sm font-bold uppercase">
              Telemedicina
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 mx-[5%] md:grid-cols-2 gap-8 mb-[3%]">
        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] overflow-hidden">
            <img
              className="w-full"
              src="https://analisisantandrea.it//images/2023/04/17/pexels-cottonbro-studio-40656241.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="https://form.jotform.com/231062046025341"
              className="font-bold hover:opacity-80 transition-all duration-200 uppercase text-[#104071] text-xl mb-2"
            >
              Prenotazioni online
            </a>
            <p className="text-gray-700 text-center">
              Compila il form e prenota ora il tuo prelievo.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] overflow-hidden">
            <img
              className="w-full"
              src="https://www.analisisantandrea.it/images/2020/01/18/dove-siamo.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="https://goo.gl/maps/QsU9QVWFc9Kh8vkn7"
              className="font-bold hover:opacity-80 transition-all duration-200 text-xl uppercase text-[#104071] mb-2"
            >
              Dove Siamo
            </a>
            <p className="text-gray-700 text-center">
              Il centro diagnostico Sant&apos;Andrea - Laboratorio Analisi è
              situato in Largo Ciaia 19 a Bari, nei pressi del centro cittadino,
              nelle immediate vicinanze di Viale Unità d&apos;Italia. Ci
              troviamo di fronte alla fermata dei bus delle ferrovie del Sud Est
              situata in Largo Ciaia, a cinque minuti a piedi dalla stazione
              centrale.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] overflow-hidden">
            <img
              className="w-full"
              src="https://www.analisisantandrea.it/images/2022/02/14/esami.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="/preparazione-esami"
              className="font-semibold cursor-pointer hover:opacity-80 transition-all duration-200 text-lg uppercase text-[#104071] mb-2"
            >
              Preparazione Esami
            </a>
            <p className="text-gray-700 text-center">
              Questa sezione consente, in funzione dell&apos;esame da sostenere,
              di conoscere quali sono le analisi o le modalità di preparazione
              prima di presentarsi presso il nostro istituto.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] overflow-hidden">
            <img
              className="w-full"
              src="https://www.analisisantandrea.it/images/2020/01/18/convenzioni.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="/convenzioni"
              className="font-bold text-xl hover:opacity-80 transition-all duration-200 uppercase text-[#104071] mb-2"
            >
              Convenzioni
            </a>
            <p className="text-gray-700 text-center">
              Il nostro centro ha siglato un accordo di convenzione con i
              maggiori gruppi presenti in Italia e in Europa. Convinti che i
              valori fondamentali che ci spingono ad essere al vostro servizio
              sono la solidarietà, l&apos;uguaglianza e il diritto universale e
              fondamentale di accesso alle cure.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] flex justify-center items-center overflow-hidden">
            <img
              className="w-full"
              src="https://www.analisisantandrea.it/images/2023/04/17/p-4.png"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl uppercase text-[#104071] mb-2">
              Parcheggio Gratuito
            </div>
            <p className="text-gray-700 text-center">
              Per tutti i nostri clienti è disponibile un parcheggio totalmente
              gratuito in Via Michele De Napoli, 3, c/o il Garage Adrian.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] flex justify-center items-center overflow-hidden object-center">
            <div className="w-[140px] h-[140px] flex justify-center items-center relative">
              <img
                className="w-full h-full object-cover"
                src="/linea-diretta-medico.png"
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="#"
              className="font-bold text-xl hover:opacity-80 transition-all duration-200 uppercase text-[#104071] mb-2"
            >
              Linea diretta con un medico
            </a>
            <p className="text-gray-700 text-center">
              E&apos; possibile inoltrare, tramite il modulo dedicato, qualsiasi
              quesito inerente consulti e indicazioni. Un nostro medico vi
              risponderà nel più breve tempo possibile.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] flex justify-center items-center overflow-hidden">
            <div className="w-[145px] h-[145px] relative">
              <img
                className="w-full h-full object-cover"
                src="https://www.analisisantandrea.it/images/2020/01/18/servizio-pos.png"
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl uppercase text-[#104071] mb-2">
              Servizio POS
            </div>
            <p className="text-gray-700 text-center">
              E&apos; possibile pagare le prestazioni con Carta di Credito e
              Bancomat
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg">
          <div className="h-[190px] flex justify-center items-center overflow-hidden">
            <div className="w-[140px] h-[140px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://www.analisisantandrea.it/images/2020/01/18/segnalazioni-e-reclami.png"
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <a
              href="/segnalazioni-reclami"
              className="font-bold text-xl uppercase hover:opacity-80 transition-all duration-200 text-[#104071] mb-2"
            >
              Segnalazioni e Reclami
            </a>
            <p className="text-gray-700 text-center">
              Nel caso in cui l&apos;utente desideri dare un suggerimento o
              sottolineare eventuali inadempienze potrà farlo tramite
              l&apos;apposita modulistica rilasciata dagli &quot;operatori di
              segreteria&quot;.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
