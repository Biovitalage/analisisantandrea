"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function FullPageCarousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const total = slides.length

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
  const goToNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

  return (
    <div 
      className={`w-full h-screen flex items-center justify-center bg-black
        transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-10'
        }
      `}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Slides container */}
        <div 
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Link
              href={slide.link}
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center group cursor-pointer relative"
              style={{ minWidth: "100%", minHeight: "100%" }}
            >
              <div
                className={`
                  absolute inset-0 w-full h-full z-0
                  transition-transform duration-700 ease-in-out
                  opacity-50
                  group-hover:scale-110
                `}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)" // TOGLI questa riga!
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                {slide.content}
              </div>
            </Link>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
          aria-label="Previous"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
          aria-label="Next"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`
                w-3 h-3 rounded-full border-2 border-white transition-all duration-300
                ${current === idx 
                  ? "bg-white scale-125" 
                  : "bg-white/30 hover:bg-white/60 hover:scale-110"
                }
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}