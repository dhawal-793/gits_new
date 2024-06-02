import { useState } from "react";

import { navLinks } from "../../data/navigationLinks";
import SideNavNestedMenu from "./SideNavNestedMenu";

const SideNav = ({ isMenuOpen, navigateTo }) => {
  const [currentOpenLink, setCurrentOpenLink] = useState("");

  const toggleNavigationLinks = (title) => {
    if (currentOpenLink === title) {
      setCurrentOpenLink("");
    } else setCurrentOpenLink(title);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 h-full max-h-screen  w-full bg-black/90 backdrop-blur-sm transition-all duration-700 ${
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
                          <SideNavNestedMenu
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
