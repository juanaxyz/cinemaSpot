import { useEffect, useState } from "react";
import { GetMovieList, SearchMovie } from "./api/api";
import MovieCard from "./components/movie-card";
import Header from "./components/header";

function App() {
  const [MovieData, setMovieData] = useState([]);

  useEffect(() => {
    GetMovieList().then((res) => {
      setMovieData(res);
    });
    
  }, []);

  const QueryMovie = async (q) => {
    if (q.length > 3) {
      const query = SearchMovie(q);
      setMovieData(query);
    }
  };

  
  return (
    <div className=" flex flex-col gap-7 bg-primary ">
      <Header />
      <input
        className="search-movie outline-2 focus:outline-sky-400 rounded-md py-2 px-5 w-1/2 self-center text-beige hover:outline-offset-4 hover:border-none transition-all"
        type="text"
        placeholder="Search for a movie..."
        onChange={({ target }) => {
          QueryMovie(target.value);
        }}
      />

      {/* <h1 className="font-bold text-2xl ml-5 text-beige">Popular Movies</h1> */}
      <div className="flex gap-5 flex-wrap justify-center pb-10 ">
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
