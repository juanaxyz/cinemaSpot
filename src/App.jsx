import { useEffect, useState } from "react";
import { GetMovieList } from "./api/api";
import MovieCard from "./components/movie-card";
import Header from "./components/header";

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
    <div className=" flex flex-col gap-7">
      <Header />
      <input
        className="search-movie border border-black rounded-md py-2 px-5 w-1/2 self-center"
        type="text"
        placeholder="Search for a movie..."
        onChange={(target) => {
          SearchMovie(target.value);
        }}
      />
      <div className="flex gap-5 flex-wrap flex-row justify-center ">
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
    </div>
  );
}

export default App;
