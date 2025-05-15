"use client"
import FavoritPage from "@/app/favorite/page";
import Link from "next/link";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const FavoritIcon = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <button className="text-xl ">
      <Link  className="flex flex-col items-center text-gray-700" href="/favorite">
            <BsHeart size={22}/>
            <p className="text-xs mt-1">Favorite</p>
    </Link>
      </button>

      {showPopup && (
        <div className="absolute  top-full right-0 w-[400px] h-[300px] bg-white shadow-lg border-[1px] rounded-md mt-2 z-50 overflow-y-auto">
         <FavoritPage/>
        </div>
      )}
    </div>
  );
};

export default FavoritIcon;
