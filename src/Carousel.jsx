import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides, autoSlide=false, autoSlideInterval=3000 }) => {
  const [curr, setCurr] = useState(0);


  const nextSlide = () => {
    if (curr === slides.length - 1) {
      setCurr(0);
    } else {
      setCurr(curr + 1);
    }
  };

  const prevSlide = () => {
    if (curr === 0) {
      setCurr(slides.length - 1);
    } else {
      setCurr(curr - 1);
    }
  };

  useEffect(() =>{
    if(!autoSlide) return;

    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  })

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div>
        <div className="absolute right-0 bottom-4 left-0">
          <div className="flex justify-center gap-3">
            {slides.map((_, i) => (
              <div
                key={i} 
                className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${
                  curr === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
