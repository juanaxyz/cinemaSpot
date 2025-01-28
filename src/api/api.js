import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const GetMovieList = async () => {
  const movieList = await axios.get(
    `${baseUrl}movie/now_playing?page=1&api_key=${apiKey}`
  );

  // console.log(movieList.data.results);
  return movieList.data.results;
};

export const SearchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data.results;
};
