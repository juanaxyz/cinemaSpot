import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
/* eslint-disable react/prop-types */
const baseImgUrl = import.meta.env.VITE_BASE_IMG_ORI;

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 7000);
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
            <div
              className="flex-shrink-0 w-full h-full relative bg-black/50"
              key={i}
            >
              <LazyLoadImage
                src={`${baseImgUrl}${item.backdrop_path}`}
                className="object-cover w-full h-full"
                alt={`Slide ${i}`}
                effect="blur"
              />

              <div className="absolute inset-0  md:w-[60%] p-5 flex flex-col justify-end my-10 z-50">
                <p className="text-white text-3xl font-bold mb-2">
                  {item.title}
                </p>
                <p className="text-white">{item.overview}</p>
              </div>
              <div className="absolute inset-0 w-full  bg-gradient-to-t from-5% from-black to-60% to-transparent "></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
