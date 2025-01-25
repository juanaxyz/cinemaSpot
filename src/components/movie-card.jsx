import propTypes from "prop-types";
const baseImgUrl = import.meta.VITE_BASE_IMG;

const MovieCard = (props) => {
  return (
    <div className="movie-container bg-cyan-200 w-[500px] text-black border ">
      <div className="movie-title font-bold text-2xl ">{props.title}</div>
      <img
        className="movie-poster w-full"
        src={`${baseImgUrl}/${props.poster}`}
      />
      <div className="movie-date italic ">{props.date}</div>
      <div className="movie-rate">{props.rate}</div>
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
