import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "./ui/Container";

import CustomButton from "./CustomButton";
import NavItem from "./navigation/NavItem";

import { navLinks } from "../data/navigationLinks";

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
    <nav className="w-full">
      <div className="fixed lg:static top-0 inset-x-0 bg-white/40 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="w-fit flex gap-2 items-center">
              <img className="w-20 h-auto" src="/images/gits-logo.png" alt="" />
              <div className="w-80">
                <p className="font-semibold text-xl md:text-2xl">
                  Geetanjali Institute of Tehcnical Studies
                </p>
              </div>
              {/* <img className="w-28 h-28" src="/images/nba-logo.png" alt="" />
          <img className="w-28 h-28" src="/images/rtu-logo.jpg" alt="" /> */}
            </Link>
          </div>
        </Container>
      </div>
      <div className="lg:hidden h-[84px]" />
      <div
        className={`fixed top-[50vh] -right-[3.2rem] -translate-y-1/2 -rotate-90 transition-all duration-200  ${
          isFixed
            ? "lg:top-[50vh] lg:-right-[4.5rem] lg:-translate-y-1/2 lg:-rotate-90"
            : "lg:top-4 lg:right-4 lg:rotate-0 lg:translate-y-0"
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
          <ul className="flex items-center justify-center gap-12 w-fit mx-auto my-2">
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
