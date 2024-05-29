import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SubNavItem = ({ subLink }) => {
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
      {subLink.subLinks ? (
        <>
          <div
            to={subLink.href}
            className="cursor-pointer px-4 py-2 hover:text-yellow-500 flex items-center justify-between"
          >
            <span> {subLink.title}</span>
            <span>&gt;</span>
          </div>
          <div
            className={`absolute left-[101%] top-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
              isOpen ? "block" : "hidden"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2">
              {subLink.subLinks.map((nestedSubLink, index) => (
                <li key={index}>
                  <a
                    href={nestedSubLink.href}
                    className="block px-4 py-2 hover:text-yellow-500"
                  >
                    {nestedSubLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Link
          to={subLink.href}
          className="block px-4 py-2 hover:text-yellow-500"
        >
          {subLink.title}
        </Link>
      )}
    </li>
  );
};

export default SubNavItem;
