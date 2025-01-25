import { useEffect, useState } from "react";
import { GetMovieList } from "./api/api";
import MovieCard from "./components/movie-card";

function App() {
  const [MovieData, setMovieData] = useState([]);

  useEffect(() => {
    GetMovieList().then((res) => {
      setMovieData(res);
    });
  }, []);

  const SearchMovie = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full flex flex-wrap flex-col items-center justify-center gap-7">
      <input
        className="search-movie border border-black rounded-md py-2 px-5 w-1/2 self-center"
        type="text"
        placeholder="Search for a movie..."
        onChange={(target) => {
          SearchMovie(target.value);
        }}
      />

      {MovieData.map((movie, i) => {
        return (
          <MovieCard
            key={i}
            title={movie.title}
            poster={movie.poster_path}
            date={movie.release_date}
            rate={movie.vote_average}
          />
        );
      })}
    </div>
  );
}

export default App;
