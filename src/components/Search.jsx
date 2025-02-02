import icons from "../assets/icons/icon";
import { useState } from "react";
import { SearchMovie } from "../api/api";

export const Search = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = async (value) => {
    if (value.length > 3) {
      try {
        const response = await SearchMovie(value);
        if (Array.isArray(response)) {
          const title = response.map((item) => item.title);
          setSearch(title);
        }
      } catch (e) {
        console.log("error:", e);
      }
    } else {
      setSearch([]);
    }
  };

  return (
    <div className="relative w-1/2 md:w-1/4 h-fit text-white">
      <img
        src={icons.search}
        alt="Search Icon"
        className="absolute left-3 top-1/2 transform  -translate-y-1/2 w-5 h-5 text-white "
      />
      <input
        className="search-movie  outline-2 outline-white focus:outline-sky-400 rounded-md p-2 pl-10 w-full text-white transition-all"
        type="text"
        placeholder="Search for a movie..."
        onChange={({ target }) => {
          handleSearch(target.value);
        }}
      />
      {search.length > 0 && (
        <div className="absolute w-full p-2 my-2 text-black border rounded-sm bg-amber-100">
          {search[0]}
        </div>
      )}
    </div>
  );
};
