import { Link } from "react-router-dom";
import { Search } from "./Search";

const Header = ({ handleSearchQuery }) => {
  return (
    <div className="w-full bg-black sticky top-0 z-50 flex justify-between items-center p-2 ">
      <Link to={"/"} className="font-bold text-2xl cursor-pointer text-white">
        CinemaSpot
      </Link>
      <Search handleSearchQuery={ handleSearchQuery } />
    </div>
  );
};

export default Header;
