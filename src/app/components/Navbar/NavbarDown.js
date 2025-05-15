import Link from "next/link";

const NavbarDown = () => {
  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Categories", link: "/categories" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="flex justify-center w-full ">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className="text-[16px] text-gray-700 hover:text-black transition font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDown;
