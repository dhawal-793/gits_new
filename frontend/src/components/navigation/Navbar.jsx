import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

import CustomButton from "../CustomButton";
import NavItem from "./NavItem";

import { navLinks } from "../../data/navigationLinks";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 84) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full relative z-50">
      <div className="fixed lg:static top-0 inset-x-0 bg-white/40 backdrop-blur-md">
        <Container>
          <div className=" w-full relative flex items-center justify-between">
            <Link to="/" className="w-fit flex gap-1 items-center">
              <img
                className="w-14 sm:w-16 md:w-20 h-auto -ml-1"
                src="/images/gits-logo.png"
                alt=""
              />
              <div className="w-56 md:w-72">
                <p className="font-semibold text-sm sm:text-xl md:text-2xl">
                  Geetanjali Institute of Tehcnical Studies
                </p>
              </div>
              {/* <img className="w-28 h-28" src="/images/nba-logo.png" alt="" />
          <img className="w-28 h-28" src="/images/rtu-logo.jpg" alt="" /> */}
            </Link>
            <div className={`hidden lg:block  ${isFixed && "lg:hidden"}`}>
              <CustomButton />
            </div>
          </div>
        </Container>
      </div>
      <div className="lg:hidden h-[84px]" />
      <div
        className={`fixed top-[50vh] -right-[3.3rem] -translate-y-1/2 -rotate-90 transition-all duration-200  ${
          isFixed ? " lg:-right-[4.6rem]" : "lg:-right-full"
        }`}
      >
        <CustomButton />
      </div>
      <div
        className={`${
          isFixed ? "lg:fixed top-0 z-50" : ""
        } bg-primary w-full hidden lg:block `}
      >
        <Container>
          <ul className="flex items-center justify-center gap-7 xl:gap-10 w-fit mx-auto my-2">
            {navLinks.map((link, index) => (
              <NavItem key={index} link={link} />
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
