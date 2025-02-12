import icons from "../assets/icons/icon";
import { SearchMovie } from "../api/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Search = ({ handleSearchQuery }) => {
  let navigate = useNavigate();

  const handleSearch = async (value) => {
    if (value.length > 3) {
      try {
        const response = await SearchMovie(value);
        handleSearchQuery(response);
      } catch (e) {
        console.log("error:", e);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/Movie/search/${e.target.value}`);
    }
  };

  return (
    <div className="relative w-1/2 md:w-1/4 h-fit text-white">
      {/* Search Icon */}
      <img
        src={icons.search}
        alt="Search Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />

      {/* Search Input */}
      <input
        className="search-movie outline-2 outline-white focus:outline-sky-400 
      rounded-md p-2 pl-10 w-full text-white transition-all bg-transparent"
        type="text"
        placeholder="Search movie..."
        onChange={({ target }) => handleSearch(target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
