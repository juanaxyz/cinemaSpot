import { useEffect, useState } from "react";
import { GetMovieList } from "../api/api";
import { Link } from "react-router-dom";

// import MovieCard from "./components/movie-card";
import Header from "../components/header";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import { MovieList } from "../components/MovieList";

function Home() {
  const [movies, SetMovies] = useState({
    nowPlaying: [],
    topRated: [],
    upcoming: [],
    popular: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popular, nowPlaying, top_rated, upcoming] = await Promise.all([
          GetMovieList("popular"),
          GetMovieList("now_playing"),
          GetMovieList("top_rated"),
          GetMovieList("upcoming"),
        ]);

        SetMovies({
          popular: popular,
          nowPlaying: nowPlaying,
          topRated: top_rated,
          upcoming: upcoming,
        });
      } catch (error) {
        console.log({ error: error });
      }
    };
    fetchMovies();
  }, []);

  // console.log(movies);
  return (
    <div className="relative w-full bg-black">
      <Header />
      <div className="w-full h-[85vh] mx-auto">
        <Carousel slides={movies.popular} />
      </div>

      {/* list movie */}
      <MovieList movies={movies.nowPlaying} category="Now Playing" />
      <MovieList movies={movies.upcoming.slice(0, 8)} category="Upcoming" />
      <div className="  flex justify-center my-10 ">
        <Link
          className="bg-amber-100 px-5 py-2 cursor-pointer rounded-sm"
          to={"/Movie/search/default"}
        >
          View More
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
