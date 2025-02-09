/* eslint-disable react/prop-types */
import MovieCard from "./movie-card";
import { NavLink } from "react-router-dom";

export const MovieList = ({ movies, category }) => {
  return (
    <div className="">
      <div className="text-2xl text-white font-bold w-[95vw] mx-auto my-5 ">
        <h1>{category}</h1>
      </div>
      <div className="flex flex-col items-center   ">
        <div className="flex gap-2 justify-center sm:justify-evenly flex-wrap z-10 bg-black w-[90vw] ">
          {Array.isArray(movies) &&
            movies.map((movie, i) => {
              // console.log(movie.id);
              return (
                <NavLink
                  key={i}
                  className="relative "
                  to={`/Movie/detail/${movie.id}`}
                >
                  <MovieCard
                    title={movie.title}
                    poster={movie.poster_path}
                    date={movie.release_date}
                    rate={movie.vote_average}
                  />
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};
