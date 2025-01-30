import icons from "../assets/icons/icon";

// eslint-disable-next-line react/prop-types
const Header = ({ onSearch }) => {
  return (
    <div className="w-full bg-transparent sticky top-0 z-50 flex justify-between items-center p-2 ">
      <h1 className="font-bold text-2xl cursor-pointer text-white">
        CinemaSpot
      </h1>
      <div className="relative w-1/2 md:w-1/4 h-fit text-white">
        <img
          src={icons.search}
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform  -translate-y-1/2 w-5 h-5 text-white "
        />
        <input
          className="search-movie outline-2 outline-white focus:outline-sky-400 rounded-md p-2 pl-10 w-full text-white transition-all"
          type="text"
          placeholder="Search for a movie..."
          onChange={({ target }) => {
            onSearch(target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
