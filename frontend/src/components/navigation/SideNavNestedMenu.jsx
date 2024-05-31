import { useState } from "react";

const SideNavNestedMenu = ({ subLink, navigateTo }) => {
  const [currentOpenLink, setCurrentOpenLink] = useState("");

  const toggleNestedNavigationLinks = (title) => {
    if (currentOpenLink === title) {
      setCurrentOpenLink("");
    } else setCurrentOpenLink(title);
  };
  return (
    <li
      className="relative"
      onMouseEnter={() => toggleNestedNavigationLinks(subLink.title)}
      onMouseLeave={() => toggleNestedNavigationLinks("")}
    >
      {subLink.subLinks ? (
        <>
          <button
            className={`w-full text-right cursor-pointer px-4 py-2 flex items-center justify-between gap-10 hover:text-primary ${
              currentOpenLink == subLink.title && "text-primary"
            }`}
            onClick={() => toggleNestedNavigationLinks(subLink.title)}
          >
            <span
              className={`fa-solid ${
                currentOpenLink == subLink.title
                  ? "fa-chevron-down"
                  : "fa-chevron-right"
              }`}
            />
            <span className="text-sm font-semibold"> {subLink.title}</span>
          </button>
          <div
            className={` w-full text-right border-t-2 backdrop-blur-sm ${
              currentOpenLink == subLink.title ? "block" : "hidden"
            }`}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <ul className="py-2 ">
              {subLink.subLinks.map((nestedSubLink, index) => (
                <li
                  key={index}
                  className="block px-4 py-2 border-r-2 border-transparent hover:text-primary font-medium text-sm hover:border-primary"
                >
                  {nestedSubLink.external ? (
                    <a href={nestedSubLink.href} target="_blank">
                      {nestedSubLink.title}
                    </a>
                  ) : (
                    <button onClick={() => navigateTo(nestedSubLink.href)}>
                      {nestedSubLink.title}
                    </button>
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
              className="block px-4 hover:text-primary text-sm py-2 font-semibold"
            >
              {subLink.title}
            </a>
          ) : (
            <button
              onClick={() => navigateTo(subLink.href)}
              className="px-4 hover:text-primary text-sm py-2 font-semibold"
            >
              {subLink.title}
            </button>
          )}
        </>
      )}
    </li>
  );
};

export default SideNavNestedMenu;
