/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
import React from "react";
const MovieCard = React.lazy(() => import("./movie-card"));

export const MovieList = ({ movies, category }) => {
  return (
    <div className="min-h-screen">
      <div className="text-2xl text-white font-bold w-[95vw] mx-auto my-5 ">
        <h1>{category}</h1>
      </div>
      <div className="flex flex-col items-center w-[95%] mx-auto">
        <div className="flex gap-2 justify-center sm:justify-evenly flex-wrap z-10   ">
          {Array.isArray(movies) &&
            movies.map((movie, i) => {
              // console.log(movie.id);
              return (
                <Link
                  key={i}
                  className="relative "
                  to={`/Movie/detail/${movie.id}`}
                >
                  <Suspense fallback={<Loader />}>
                    <MovieCard
                      title={movie.title}
                      poster={movie.poster_path}
                      date={movie.release_date}
                      rate={movie.vote_average}
                    />
                  </Suspense>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
