import icons from "../assets/icons/icon";
import { useState } from "react";
import { SearchMovie } from "../api/api";
import { useNavigate, NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Search = ({ handleSearchQuery }) => {
  let navigate = useNavigate();
  const [querySearch, setquerySearch] = useState([]);

  const handleSearch = async (value) => {
    if (value.length > 3) {
      try {
        const response = await SearchMovie(value);
        handleSearchQuery(response);
        if (Array.isArray(response)) {
          const title = response.map((item) => item);
          setquerySearch(title);
        }
      } catch (e) {
        console.log("error:", e);
      }
    } else {
      setquerySearch([]);
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
        placeholder="Search for a movie..."
        onChange={({ target }) => handleSearch(target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Search Suggestions Dropdown */}
      {querySearch?.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg rounded-md mt-1">
          {querySearch.slice(0, 5).map((item) => (
            <NavLink
              className="block p-2 my-1 rounded-sm bg-amber-100 text-black hover:bg-amber-200 transition"
              key={item.id} // Use item.id instead of index for better uniqueness
              to={`/Movie/detail/${item.id}`}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
