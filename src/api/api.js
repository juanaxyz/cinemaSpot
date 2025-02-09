import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const GetMovieList = async (q) => {
  const movieList = await axios.get(
    `${baseUrl}movie/${q}?page=1&api_key=${apiKey}`
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

export const DetailMovie = async (id) => {
  const DetailMovie = await axios.get(
    `${baseUrl}movie/${id}?api_key=${apiKey}`
  );

  return DetailMovie.data;
};
