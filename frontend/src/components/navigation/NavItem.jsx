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
    // Add a delay before closing the dropdown
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
      <Link to={link.href} className="hover:text-blue-600">
        {link.title}
      </Link>
      {link.subLinks && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
            isOpen ? "block" : "hidden"
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
      )}
    </li>
  );
};

export default NavItem;
