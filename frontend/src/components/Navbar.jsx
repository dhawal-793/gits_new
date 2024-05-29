import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import NavItem from "./navigation/NavItem";

import { navLinks } from "../data/navigationLinks";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <nav
      className={`${
        isSticky
          ? "fixed bg-white/40 backdrop-blur-sm top-0 transition-all ease-linear duration-200 inset-x-0"
          : "static bg-white/80"
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
              className="w-14 h-14 flex items-center justify-center text-2xl"
              onClick={toggleNav}
            >
              <span className="">{isMenuOpen ? "X" : "#"}</span>
            </button>
          </div>
        </div>
        <ul className="hidden lg:flex items-center justify-center gap-4 w-fit mx-auto mt-3">
          {navLinks.map((link, index) => (
            <NavItem key={index} link={link} />
          ))}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;