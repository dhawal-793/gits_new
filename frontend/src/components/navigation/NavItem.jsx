import { useRef, useState } from "react";

import SubNavItem from "./SubNavItem";
import { Link } from "react-router-dom";

const NavItem = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link.subLinks ? (
        <>
          <p className="cursor-pointer font-semibold hover:text-yellow-500 transition-colors duration-200">
            {link.title}
          </p>
          <div
            className={`absolute right-1/2 translate-x-1/2 mt-2 min-w-fit w-48 bg-white shadow-lg border-t-2 border-yellow-500 ${
              isOpen
                ? "opacity-100 transition-all duration-300 ease-in"
                : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className=" rounded-lg">
              {link.subLinks.map((subLink, index) => (
                <SubNavItem key={index} subLink={subLink} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              className="cursor-pointer font-semibold hover:text-yellow-500 transition-colors duration-200"
            >
              {link.title}
            </a>
          ) : (
            <Link
              to={link.href}
              className="cursor-pointer font-semibold hover:text-yellow-500 transition-colors duration-200"
            >
              {link.title}
            </Link>
          )}
          <div
            className={`absolute right-1/2 translate-x-1/2 mt-4 w-full border-t-2 border-yellow-500  ${
              isOpen
                ? "opacity-100 transition-all duration-300 ease-in"
                : "opacity-0"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </>
      )}
    </li>
  );
};

export default NavItem;
