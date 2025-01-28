import propTypes from "prop-types";
import icon from "../assets/icons/icon";
const baseImgUrl = import.meta.env.VITE_BASE_IMG;

const MovieCard = (props) => {
  return (
    <div className="movie-container  bg-tertiary m-2 w-3xs min-h-fit text-black rounded-sm shadow-md shadow-neutral-700 hover:scale-105 transition-all cursor-pointer ">
      <div className="movie-title font-bold text-2xl text-center px-5 h-16 ">
        {props.title}
      </div>
      <img
        className="movie-poster w-full h-fit object-cover "
        src={`${baseImgUrl}${props.poster}`}
      />
      <span className="flex justify-between px-5 py-2">
        <div className="movie-date italic ">{props.date}</div>
        <div className="movie-rate flex items-center">
          <img src={icon.star} className="size-3 mr-1" />
          {props.rate}
        </div>
      </span>
    </div>
  );
};

MovieCard.propTypes = {
  title: propTypes.string,
  poster: propTypes.string,
  date: propTypes.string,
  rate: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default MovieCard;
