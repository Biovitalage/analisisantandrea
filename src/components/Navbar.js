/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Topbar social con animazione Y */}
      <div
        className={`
          w-full bg-blue-600 text-white text-sm flex justify-end items-center px-6 gap-4 z-50
          fixed top-0 left-0
          transition-transform duration-500
          ${scrolled ? "-translate-y-full" : "translate-y-0"}
        `}
        style={{ height: "40px" }} // imposta l'altezza della topbar
      >
        <a
          href="https://www.instagram.com/santandrea_laboratorio_analisi/?fbclid=IwAR12TuCvaLSoc8NTW9amHzMMETGVgKT4DE5OpPAeW6r9yVGyWBLlRD48OMw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/laboratorioanalisisantandrea"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/sant-andrea-longevity-center/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      {/* Navbar principale */}
      <nav
        className={`
          fixed left-0 w-full z-40 transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow text-gray-900 top-0"
              : "bg-white text-gray-900 top-10"
          }
        `}
        style={{ minHeight: "64px" }} // imposta l'altezza minima della navbar principale
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link
            href="/"
            className="hover:opacity-80 text-xl font-bold hover:text-grey transition"
          >
            <img
              src="/icon.png"
              alt="Logo"
              className="w-10 h-10 inline-block"
            />
            Sant&apos;Andrea Longevity Center
          </Link>
          <div className="space-x-4 flex items-center">
            <Link
              href="/"
              className="hover:opacity-80 transition-all duration-200"
            >
              Home
            </Link>
            <div className="relative group">
              <div className="hover:opacity-80 transition-all duration-200 flex items-center cursor-pointer select-none">
                Longevità
              </div>
              <div
                className="absolute left-0 w-[max-content] text-center bg-white text-gray-800 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
                style={{ borderTop: "8px solid transparent" }}
              >
                <Link
                  href="/servizi/seo"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Longevity News
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 tranition-all duration-200 hover:bg-blue-100"
                >
                  Ricette della Longevità
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="hover:opacity-80 transition-all duration-200 flex items-center cursor-pointer select-none">
                Terapie
              </div>
              <div
                className="absolute left-0 w-[max-content] text-center bg-white text-gray-800 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
                style={{ borderTop: "8px solid transparent" }}
              >
                <Link
                  href="/servizi/seo"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Smart Mind
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  IV Therapy
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Skin Vitality
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Muscle Therapy
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Piano Rigenerativo
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Cardio
                </Link>
                <Link
                  href="/servizi/grafica"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Metabolism
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="hover:opacity-80 transition-all duration-200"
            >
              Ricerca e Sviluppo
            </Link>
            <div className="relative group">
              <div className="hover:opacity-80 transition-all duration-200 flex items-center cursor-pointer select-none">
                Professionisti
              </div>
              <div
                className="absolute left-0 w-[max-content] text-center bg-white text-gray-800 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
                style={{ borderTop: "8px solid transparent" }}
              >
                <Link
                  href="/servizi/seo"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Collabora con noi
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="hover:opacity-80 transition-all duration-200 flex items-center cursor-pointer select-none">
                Pillole di Longevità
              </div>
              <div
                className="absolute left-0 w-[max-content] text-center bg-white text-gray-800 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
                style={{ borderTop: "8px solid transparent" }}
              >
                <Link
                  href="/servizi/seo"
                  className="block px-4 py-2 transition-all duration-200 hover:bg-blue-100"
                >
                  Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
