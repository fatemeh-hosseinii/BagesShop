"use client";

import { useState } from "react";
import NavbarDown from "./NavbarDown";
import NavbarUp from "./NavbarUp";
import { BsList } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full  bg-[#ffbdbd] shadow-lg  sticky top-0 z-[999]">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-3">
        {/* بالای نوار - لوگو، سرچ، آیکون‌ها */}
        <NavbarUp />

        {/* دکمه‌ی همبرگر در موبایل */}
        <div className="flex flex-col">
          <div className="flex justify-end md:hidden ">
          
          <div className="w-full md:w-[40%] flex justify-center ">
            <Link href="/" className="block  w-[40%]">
              <img src="/Media/logo (1).png" alt="لوگو" className="w-full object-contain" />
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            <BsList />
          </button>
          </div>
         
         

        </div>
      

        {/* منوی پایین - در موبایل وقتی باز بشه، در دسکتاپ همیشه نمایش داده بشه */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <NavbarDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
