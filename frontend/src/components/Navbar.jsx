import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import NavItem from "./navigation/NavItem";

import { navLinks } from "../data/navigationLinks";
import SideNav from "./navigation/SideNav";

const Navbar = ({isMenuOpen,toggleNav}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isSticky
            ? "sticky bg-white/90 backdrop-blur-md top-0 transition-all ease-linear duration-200 inset-x-0"
            : "static bg-white"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl  py-1 px-4">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="w-fit flex gap-2 items-center">
              <img className="w-20 h-auto" src="/images/gits-logo.png" alt="" />
              <div className="w-80">
                <p className="font-semibold text-2xl">
                  Geetanjali Institute of Tehcnical Studies
                </p>
              </div>
              {/* <img className="w-28 h-28" src="/images/nba-logo.png" alt="" />
          <img className="w-28 h-28" src="/images/rtu-logo.jpg" alt="" /> */}
            </Link>
            <div className="flex items-center gap-5">
              <div className="fixed top-40 right-10 lg:static">
                <CustomButton />
              </div>
              <button
                className="w-14 h-14 flex items-center justify-center relative z-50 text-yellow-500"
                onClick={toggleNav}
              >
                <span
                  className={`text-3xl fa-solid ${
                    isMenuOpen ? "fa-xmark -rotate-180" : "fa-bars rotate-0"
                  } transition-all duration-200`}
                />
              </button>
            </div>
          </div>
          <ul className="hidden lg:flex items-center justify-center gap-12 w-fit mx-auto mt-3">
            {navLinks.map((link, index) => (
              <NavItem key={index} link={link} />
            ))}
          </ul>
        </div>
      </nav>
      <nav
        className={`fixed right-0 top-0 h-full max-h-screen  w-full bg-white/40 backdrop-blur-sm transition-all duration-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-30`}
      >
        <div className="overflow-y-auto">
          <SideNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
