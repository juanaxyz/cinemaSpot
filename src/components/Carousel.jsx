import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const baseImgUrl = import.meta.env.VITE_BASE_IMG_ORI;

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative border h-full w-full">
      <div
        className="flex w-full h-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, i) => {
          return (
            <div className="flex-shrink-0 w-full h-full" key={i}>
              <img
                src={`${baseImgUrl}${item.backdrop_path}`}
                className="object-cover w-full h-full"
                alt={`Slide ${i}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
