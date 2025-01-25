import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const GetMovieList = async () => {
  const movieList = await axios.get(
    `${baseUrl}movie/popular?api_key=${apiKey}`
  );
  
  return movieList.data.results;
  //   console.log(movieList.data.results);
};
