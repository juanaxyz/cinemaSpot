/* eslint-disable react/prop-types */
import MovieCard from "./movie-card";

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
              return (
                <div key={i} className="relative ">
                  <MovieCard
                    title={movie.title}
                    poster={movie.poster_path}
                    date={movie.release_date}
                    rate={movie.vote_average}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
