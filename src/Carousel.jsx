import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slides, autoSlide=false, autoSlideInterval=4000 }) => {
  const [curr, setCurr] = useState(0);
  const [progress, setProgess] = useState(0);


  const nextSlide = () => {
    setCurr((prev) => prev === slides.length-1 ? 0 : prev+1)
    setProgess(0);
  };

  const prevSlide = () => {
    setCurr((prev) => prev === 0 ? slides.length-1 : prev-1)
    setProgess(0);
  };

  useEffect(() =>{
    if(!autoSlide) return;

    const interval = setInterval(()=>{
      setProgess((prev) => {
        if(prev>=100){
          nextSlide();
          return 0;
        }
        return prev+(100/(autoSlideInterval/100));
      })
    }, 100);
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
      {/* <div>
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
      </div> */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gray-300">
        <div
          className="h-full bg-slate-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default Carousel;
