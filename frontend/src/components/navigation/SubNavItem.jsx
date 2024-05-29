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
          <div className="cursor-pointer px-4 py-2 hover:text-yellow-500 flex items-center justify-between gap-10">
            <span> {subLink.title}</span>
            <span>&gt;</span>
          </div>
          <div
            className={`absolute left-full top-0 mt-2 ml-2 w-48 bg-white shadow-lg rounded-lg ${
              isOpen ? "block" : "hidden"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2">
              {subLink.subLinks.map((nestedSubLink, index) => (
                <li key={index}>
                  <Link
                    to={nestedSubLink.href}
                    className="block px-4 py-2 hover:text-yellow-500"
                  >
                    {nestedSubLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          {subLink.external ? (
            <a
              href={subLink.href}
              target="_blank"
              className="block px-4 py-2 hover:text-yellow-500"
            >
              {subLink.title}
            </a>
          ) : (
            <Link
              to={subLink.href}
              className="block px-4 py-2 hover:text-yellow-500"
            >
              {subLink.title}
            </Link>
          )}
        </>
      )}
    </li>
  );
};

export default SubNavItem;
