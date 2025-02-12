import Header from "../components/header";
import { MovieList } from "../components/MovieList";
import { GetMovieList, SearchMovie } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

const Movie = () => {
  const [MovieData, setMovieList] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query === "default") {
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
      <Footer />
    </div>
  );
};

export default Movie;
