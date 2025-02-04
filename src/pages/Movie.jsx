import Header from "../components/header";
import { MovieList } from "../components/MovieList";
import { GetMovieList } from "../api/api";
import { useEffect, useState } from "react";

const Movie = () => {
  const [MovieData, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await GetMovieList("popular");
        setMovieList(res);
      } catch (e) {
        console.log("error :", e);
      }
    };
    fetchMovies();
  }, []);

  console.log(MovieList);
  return (
    <div className="bg-black">
      <Header />

      <div>
        <MovieList category="" movies={MovieData} />
      </div>
    </div>
  );
};

export default Movie;
