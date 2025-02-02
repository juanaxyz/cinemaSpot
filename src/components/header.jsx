import { Search } from "./Search";

const Header = () => {
  return (
    <div className="w-full bg-black sticky top-0 z-50 flex justify-between items-center p-2 ">
      <h1 className="font-bold text-2xl cursor-pointer text-white">
        CinemaSpot
      </h1>
      <Search />
    </div>
  );
};

export default Header;
