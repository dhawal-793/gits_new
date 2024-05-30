import { useRef, useState } from "react";

import { navLinks } from "../../data/navigationLinks";

const SideNav = ({ isMenuOpen, navigateTo }) => {
  const [currentOpenLink, setCurrentOpenLink] = useState("");

  const toggleNavigationLinks = (title) => {
    if (currentOpenLink === title) {
      setCurrentOpenLink("");
    } else setCurrentOpenLink(title);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 h-full max-h-screen  w-full bg-black/90 backdrop-blur-sm transition-all duration-200 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } z-[60]  lg:hidden`}
    >
      <div className="flex h-screen w-full flex-col items-end justify-start pt-20">
        <ul className="space-y-4 py-6 overflow-y-scroll w-full h-full">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="relative w-full text-white"
                onMouseEnter={() => toggleNavigationLinks(link.title)}
                onMouseLeave={() => toggleNavigationLinks("")}
              >
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleNavigationLinks(link.title)}
                      className="w-full text-right cursor-pointer font-semibold hover:text-primary transition-colors duration-200 px-6"
                    >
                      {link.title}
                    </button>
                    <div
                      className={`bg-white/20 backdrop-blur-lg mt-2 w-full text-right shadow-lg border-t-4 border-primary pt-2 mr-6 transition-all duration-200  ${
                        currentOpenLink == link.title
                          ? "h-full relative  opacity-100  duration-300 ease-in translate-y-0"
                          : "h-0 absolute opacity-0 pointer-events-none -translate-y-5"
                      }`}
                    >
                      <ul className="">
                        {link.subLinks.map((subLink, index) => (
                          <SubNavItem
                            key={index}
                            subLink={subLink}
                            navigateTo={navigateTo}
                          />
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
                        className="block w-full text-right cursor-pointer px-6 font-semibold hover:text-primary transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <button
                        onClick={() => navigateTo(link.href)}
                        // href={link.href}
                        className="block w-full text-right cursor-pointer px-6 font-semibold hover:text-primary transition-colors duration-200"
                      >
                        {link.title}
                      </button>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;

const SubNavItem = ({ subLink, navigateTo }) => {
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
            className={`w-full text-right cursor-pointer px-4 py-2 flex items-center justify-between gap-10 ${
              isOpen && "text-primary"
            }`}
          >
            <span
              className={`fa-solid ${
                isOpen ? "fa-chevron-down" : "fa-chevron-right"
              }`}
            />
            <span className="text-sm font-semibold"> {subLink.title}</span>
          </div>
          <div
            className={` w-full text-right border-t-2 backdrop-blur-sm ${
              isOpen ? "block" : "hidden"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                    <button onClick={()=>navigateTo(nestedSubLink.href)}>
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
