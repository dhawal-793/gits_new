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
    }, 100);
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
            className={`cursor-pointer px-4 py-2 border-l-4 border-transparent flex items-center justify-between gap-10 ${
              isOpen && "text-primary border-l-primary"
            }`}
          >
            <span className="text-sm font-semibold"> {subLink.title}</span>
            <span className="fa-solid fa-chevron-right"/>
          </div>
          <div
            className={`absolute left-full top-0 mt-1 ml-[2px] w-48 bg-white shadow-lg ${
              isOpen ? "block" : "hidden"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2">
              {subLink.subLinks.map((nestedSubLink, index) => (
                <li
                  key={index}
                  className="block px-4 py-2 hover:text-primary font-medium text-sm"
                >
                  {nestedSubLink.external ? (
                    <a href={nestedSubLink.href} target="_blank">
                      {nestedSubLink.title}
                    </a>
                  ) : (
                    <Link to={nestedSubLink.href}>{nestedSubLink.title}</Link>
                  )}
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
              className="block px-4 border-l-4 border-transparent hover:border-l-primary hover:text-primary text-sm py-2 font-semibold"
            >
              {subLink.title}
            </a>
          ) : (
            <Link
              to={subLink.href}
              className="block px-4 border-l-4 border-transparent hover:border-l-primary hover:text-primary text-sm py-2 font-semibold"
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
