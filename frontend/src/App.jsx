import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./AllRoutes";
import SideNav from "./components/navigation/SideNav";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (url) => {
    console.log(url);
    navigate(url);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  return (
    <div className="w-full bg-white relative">
        <Navbar />
        <SideNav isMenuOpen={isMenuOpen} navigateTo={navigateTo} />

        <button
        className={`fixed top-0.5 translate-y-1/2 right-4 z-[90] text-primary lg:hidden text-3xl w-fit flex items-center justify-center`}
        onClick={toggleNav}
      >
        <span
          className={`fa-solid ${
            isMenuOpen ? "fa-xmark -rotate-180" : "fa-bars rotate-0"
          } transition-all duration-200`}
        ></span>
      </button>
        <AllRoutes />
        <Footer />
    </div>
  );
}

export default App;
