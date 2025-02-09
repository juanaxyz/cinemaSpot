import Header from "../components/header";
import { MovieList } from "../components/MovieList";
import { GetMovieList, SearchMovie } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [MovieData, setMovieList] = useState([]);
  const { query } = useParams();
  console.log(query);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query == "default") {
          setMovieList(await GetMovieList("upcoming"));
        } else {
          setMovieList(await SearchMovie(query));
        }
      } catch (e) {
        console.log("error :", e);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearchQuery = (searchTerm) => {
    setMovieList(searchTerm);
  };

  return (
    <div className="bg-black">
      <Header handleSearchQuery={handleSearchQuery} />

      <div>
        <MovieList category="" movies={MovieData} />
      </div>
    </div>
  );
};

export default Movie;
