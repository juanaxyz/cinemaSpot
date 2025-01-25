import propTypes from "prop-types";
import icon from "../assets/icons/icon";
const baseImgUrl = import.meta.env.VITE_BASE_IMG;

const MovieCard = (props) => {
  return (
    <div className="movie-container bg-cyan-200 w-3xs min-h-fit text-black border ">
      <div className="movie-title font-bold text-2xl text-center px-5 h-16 ">
        {props.title}
      </div>
      <img
        className="movie-poster w-full h-96 object-cover"
        src={`${baseImgUrl}${props.poster}`}
      />
      <span className="flex justify-between px-5 py-2">
        <div className="movie-date italic ">{props.date}</div>
        <div className="movie-rate flex items-center">
          <img src={icon.star} className="size-4 mr-2" />{props.rate}
        </div>
      </span>
    </div>
  );
};

MovieCard.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  rate: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};

export default MovieCard;
