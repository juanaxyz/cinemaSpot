import icons from "../assets/icons/icon";
import { useState } from "react";
import { SearchMovie } from "../api/api";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  let navigate = useNavigate();
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
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/Movie");
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
        onKeyDown={handleKeyDown}
      />
      <div className="absolute w-full  ">
        {search.length > 0 &&
          search.slice(0, 5).map((item, i) => {
            return (
              <div className="w-full p-2 my-1 rounded-sm bg-amber-100" key={i}>
                <div className="text-black">{item}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
