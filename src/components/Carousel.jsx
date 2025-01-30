import { ListPopularMovie } from "../api/api";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [HeroMovie, setHeroMovie] = useState([]);
  useEffect(() => {
    ListPopularMovie().then((res) => {
      setHeroMovie(res);
    });
  }, []);
  return (
    <div className="relative flex justify-between items-center px-10 w-screen ">
      <div className="text-white text-3xl font-bold w-1/2">
        Contoh Judul
        <div className="text-white text-lg font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sed quia
          eligendi illo, minima iusto quos! Sunt possimus voluptate quisquam
          veritatis, quis ad eligendi minus!
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <div className="relative  rounded-lg">
          <div className="relative ">
            <img
              src="https://image.tmdb.org/t/p/w500/5T9WR7vIOnHm6xhVt5zBuPbBgt1.jpg"
              alt=""
              className="w-full h-full rounded-lg "
            />
            {/* Overlay untuk efek shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_50px_rgba(0,0,0,1)]" />
            <div className="absolute inset-0 shadow-[inset_0_0_50px_50px_rgba(0,0,0,1)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
