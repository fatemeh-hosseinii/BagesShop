"use client";

import { useState } from "react";
import NavbarDown from "./NavbarDown";
import NavbarUp from "./NavbarUp";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#ffbdbd] shadow-lg">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-3">
        {/* بالای نوار - لوگو، سرچ، آیکون‌ها */}
        <NavbarUp />

        {/* دکمه‌ی همبرگر در موبایل */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            <BsList />
          </button>
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
