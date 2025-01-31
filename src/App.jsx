import { useEffect, useState } from "react";
import { GetMovieList, SearchMovie, ListPopularMovie } from "./api/api";

import MovieCard from "./components/movie-card";
import Header from "./components/header";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [upcomingMovie, setupcomingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    ListPopularMovie().then((res) => {
      setPopularMovie(res || []);
    });

    GetMovieList("now_playing").then((res) => {
      setNowPlaying(res || []);
    });
    GetMovieList("top_rated").then((res) => {
      settopRated(res || []);
    });
    GetMovieList("upcoming").then((res) => {
      setupcomingMovie(res || []);
    });
  }, []);

  const QueryMovie = async (q) => {
    if (q.length > 3) {
      const query = await SearchMovie(q);
      console.log(query);
      // setMovieData(query);
    }
  };

  return (
    <div className="relative w-full bg-black">
      <Header onSearch={QueryMovie} />
      <div className="w-full h-[85vh] mx-auto">
        <Carousel slides={popularMovie} />
      </div>

      {/* list movie */}
      <div className="text-2xl text-white font-bold w-[95vw] mx-auto ">
        <h1>Now Playing</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar z-10 bg-black ">
        {Array.isArray(nowPlaying) &&
          nowPlaying.map((movie, i) => {
            return (
              <div key={i} className="relative">
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

      <div className="text-2xl text-white font-bold w-[95vw] mx-auto">
        <h1>Top Rated</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar">
        {Array.isArray(topRated) &&
          topRated.map((movie, i) => {
            return (
              <div key={i} className="relative">
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

      <div className="text-2xl text-white font-bold w-[95vw] mx-auto">
        <h1>Upcoming</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar">
        {Array.isArray(upcomingMovie) &&
          upcomingMovie.map((movie, i) => {
            return (
              <div key={i} className="relative">
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

      <Footer />
    </div>
  );
}

export default App;
