"use client";
import { useShoppingCart } from "@/app/Context/ShoppingCartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillSuitHeartFill, BsCartFill } from "react-icons/bs";

const NavbarRight = () => {
  const { totalqty } = useShoppingCart();
  console.log("total",totalqty);
  const pathname = usePathname();

  const navlinks = [
    { id: 1, link: "/", text: "Home" },
    { id: 2, link: "/store", text: "Store" },
  ];

  return (
    <div className="flex flex-row w-[40%] gap-5 items-center">
      {navlinks.map((elem) => (
        <Link
          key={elem.id}
          href={elem.link}
          className={`${pathname === elem.link ? "text-amber-500" : ""} text-[20px]`}
        >
          {elem.text}
        </Link>
      ))}

      <div className="bg-white shadow-md w-[40%] p-1">
        <input
          className="outline-none w-full"
          type="search"
          placeholder="Search"
        />
      </div>

      <Link
        href="#"
        className="bg-white shadow-md px-3 flex justify-center items-center"
      >
        <BsFillSuitHeartFill className="text-[#b50303]" size={22} />
      </Link>

      <Link
        href="/cart"
        className="bg-white shadow-md px-3 flex items-center gap-1"
      >
        <BsCartFill className="text-[#fb9292]" size={22} />
        <span>{totalqty}</span>
      </Link>
    </div>
  );
};

export default NavbarRight;
