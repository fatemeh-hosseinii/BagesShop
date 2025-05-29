"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarDown = () => {
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Categories", link: "/categories" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="flex justify-center w-full">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
        {navItems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`text-[16px] transition font-medium px-3 py-1 rounded ${
                  isActive
                    ? "bg-[#EF7777] rounded-lg px-4 py-2 text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarDown;
