import Link from "next/link";
import { BsBag, BsHeart, BsPerson, BsSearch, BsFillPersonVcardFill } from "react-icons/bs";
import FavoritIcon from "./FavoritIcon";

const NavbarUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* جستجو */}
      <div className="w-full md:w-1/3 px-2">
        <div className="flex items-center border-b border-gray-400 p-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent placeholder-gray-500 text-sm"
          />
          <BsSearch size={20} className="text-gray-600 ml-2" />
        </div>
      </div>

      {/* لوگو */}
      <div className="w-full md:w-[40%] flex justify-center ">
        <Link href="/" className="block  w-[40%]">
          <img src="/Media/logo (1).png" alt="لوگو" className="w-full object-contain" />
        </Link>
      </div>

      {/* آیکون‌ها */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-8 mt-2">
        <FavoritIcon />
        <Link href="/" className="flex flex-col items-center text-gray-700">
          <BsBag size={22} />
          <span className="text-xs mt-1">Cart</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-gray-700">
          <BsPerson size={25} />
          <span className="text-xs mt-1">User</span>
        </Link>
        <Link href="/dashbord" className="flex flex-col items-center text-gray-700">
          <BsFillPersonVcardFill size={22} />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarUp;
