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
      <button className="text-xl mt-1">
      <Link className=" flex flex-col justify-center items-center" href="/favorite">
            <BsHeart size={25}/>
            <p className="text-[12px]">Favorite</p>
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
