import { useState } from "react";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <img src={slide.image} alt={slide.alt} className="w-full h-96 object-contain" />
            </div>
          ))}
        </div>
      </div>
      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-20 text-black py-28 px-8 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-20 text-black py-28 px-8 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}