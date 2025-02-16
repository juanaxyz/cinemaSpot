import PropTypes from "prop-types";
import icon from "../assets/icons/icon";
import NotFoundIMG from "../assets/images/not-found.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



const MovieCard = ({ title, poster, date, rate }) => {
  const baseImgUrl = import.meta.env.VITE_BASE_IMG;

  return (
    <div className="group relative overflow-hidden rounded-lg  shadow-lg transition-all duration-300 hover:shadow-xl w-36">
      {/* Image Container with Overlay */}
      <div className="relative aspect-[2/3] overflow-hidden">
        {poster == null ? (
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={NotFoundIMG}
            alt={title}
          />
        ) : (
          <LazyLoadImage
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={`${baseImgUrl}${poster}`}
            alt={title}
            effect="blur"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Container */}
      <div className="p-2">
        {/* Title */}
        <h3 className="mb-1 line-clamp-1 text-sm font-semibold text-white">
          {title}
        </h3>

        {/* Info Row */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-white">{date}</span>
          <div className="flex items-center gap-1 rounded-full  px-1.5 py-0.5">
            <img src={icon.star} className="h-3 w-3" alt="rating star" />
            <span className="font-medium text-white">{rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  date: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MovieCard;
