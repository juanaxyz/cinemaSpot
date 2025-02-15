import { useParams } from "react-router-dom";
import icons from "../assets/icons/icon";
import { DetailMovie } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import { MovieList } from "../components/MovieList";
import Footer from "../components/footer";
import NotFoundIMG from "../assets/images/not-found.png";
import Header from "../components/header";

const DetailMovieComponent = () => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG;
  const baseImgUrlHD = import.meta.env.VITE_BASE_IMG_ORI;
  const { id } = useParams();
  const [detail, setDetail] = useState({
    detailMovies: [],
    recommendationsMovie: [],
  });

  useEffect(() => {
    setDetail({ detailMovies: [], recommendationsMovie: [] });
    const fetchDetail = async () => {
      try {
        const [detail, recommendations] = await Promise.all([
          DetailMovie(id),
          DetailMovie(`${id}/recommendations`),
        ]);
        setDetail({
          detailMovies: detail,
          recommendationsMovie: recommendations,
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <div className="bg-black relative text-white">
      <Header />
      {/* Background Image */}
      {detail.detailMovies.backdrop_path == null ? (
        <img
          src={NotFoundIMG}
          className="absolute top-0 left-0 w-full h-full opacity-50 object-cover"
          alt="Movie Background"
        />
      ) : (
        <img
          src={`${baseImgUrlHD}${detail.detailMovies?.backdrop_path} `}
          className="absolute top-0 left-0 w-full h-full opacity-50 object-cover"
          alt="Movie Background"
        />
      )}

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row p-5 gap-5">
        {/* Movie Poster */}
        <div className="md:w-1/3">
          {detail.detailMovies.poster_path == null ? (
            <img
              src={NotFoundIMG}
              alt={detail.detailMovies?.title || "Movie Poster"}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ) : (
            <img
              src={`${baseImgUrl}${detail.detailMovies?.poster_path}`}
              alt={detail.detailMovies?.title || "Movie Poster"}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Movie Details */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{detail.detailMovies?.title}</h1>
          <p className="mt-2 text-sm md:text-base">
            {detail.detailMovies?.overview}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3 gap-2">
            <img src={icons.star} alt="Star Icon" className="w-5 h-5" />
            <p>{detail.detailMovies?.vote_average}</p>
          </div>
        </div>
      </div>

      {/* Recommended Movies */}
      <div className="p-5 relative">
        <MovieList
          movies={detail.recommendationsMovie?.results}
          category="Recommended For You"
        />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default DetailMovieComponent;
