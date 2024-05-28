import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Navbar = () => {
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
    <nav
      className={`${isSticky ? "fixed bg-white/20 backdrop-blur-sm top-0 transition-all ease-in duration-200 inset-x-0" : "static bg-white"} h-32`}
    >
      <div className="mx-auto max-w-screen-2xl  py-2 px-4">
        <div className="flex items-center justify-between w-full">
          <div className="w-fit flex gap-2 items-center">
            <img className="w-20 h-auto" src="/images/gits-logo.png" alt="" />
            <div className="w-80">
              <p className="font-semibold text-2xl">
                Geetanjali Institute of Tehcnical Studies
              </p>
            </div>
            {/* <img className="w-28 h-28" src="/images/nba-logo.png" alt="" />
          <img className="w-28 h-28" src="/images/rtu-logo.jpg" alt="" /> */}
          </div>
          <div className="flex items-center gap-5">
            <div className="fixed top-40 right-10 lg:static">
            <CustomButton />
            </div>
            <button className="">toggle</button>
          </div>
        </div>
        <ul className="flex items-center justify-center gap-4 w-fit mx-auto">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Ranking</Link>
          </li>
          <li>
            <Link to="/">Placements</Link>
          </li>
          <li>
            <Link to="/">Program Offered</Link>
          </li>
          <li>
            <Link to="/">Life at GITS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
