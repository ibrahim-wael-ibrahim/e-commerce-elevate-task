import { useState } from "react";
import NavigationLink from "../UI/NavigationLink";
const links = [
  { title: "home", path: "/" },
  { title: "shop", path: "/shop" },
  { title: "cart", path: "/cart" },
];

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="  capitalize text-l font-extrabold flex  justify-evenly items-center px-8">
      <button
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div className="flex flex-col gap-1">
          <span className="block w-6 h-1 bg-customGray" />
          <span className="block w-6 h-1 bg-customGray" />
          <span className="block w-6 h-1 bg-customGray" />
        </div>
      </button>

      <ul
        className={`border-customGray border-2 md:border-0 bg-white md:bg-transparent  absolute top-[70px] right-14  md:top-0  w-[200px]    p-4 rounded-3xl   md:relative md:flex md:flex-row  transition-all duration-300  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map(({ title, path }) => (
          <li key={title} className="md:mr-4 my-2">
            <NavigationLink
              title={title}
              path={path}
              callback={() => setIsOpen(false)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
