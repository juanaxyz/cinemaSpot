import { useEffect, useState } from "react";
import { GetMovieList, SearchMovie } from "./api/api";

import MovieCard from "./components/movie-card";
import Header from "./components/header";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";

function App() {
  const [MovieData, setMovieData] = useState([]);

  useEffect(() => {
    GetMovieList().then((res) => {
      setMovieData(res || []);
    });
  }, []);

  const QueryMovie = async (q) => {
    if (q.length > 3) {
      const query = await SearchMovie(q);
      setMovieData(query);
    }
  };

  const dummy = [1, 2, 3, 4, 5];

  return (
    <div className="relative w-full bg-black">
      <Header onSearch={QueryMovie} />
      <div className="flex flex-row gap-4 overflow-y-auto snap-x snap-mandatory no-scrollbar">
        {dummy.map((item, key) => (
          <div key={key} className="relative snap-center">
            <Carousel />
          </div>
        ))}
      </div>

      {/* list movie */}
      <div className="text-2xl text-white font-bold w-[95vw] mx-auto -mt-40">
        <h1>Now Playing</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar z-10 bg-black ">
        {Array.isArray(MovieData) &&
          MovieData.map((movie, i) => {
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
        <h1>Now Playing</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar">
        {Array.isArray(MovieData) &&
          MovieData.map((movie, i) => {
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
        <h1>Now Playing</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-y-auto p-5 no-scrollbar">
        {Array.isArray(MovieData) &&
          MovieData.map((movie, i) => {
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
