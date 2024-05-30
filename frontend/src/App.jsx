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
    setIsMenuOpen(false)
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  return (
    <div className="w-full bg-white relative">
      <div
        className={`w-full bg-white ${
          isMenuOpen ? "fixed inset-0" : "static"
        } `}
      >
        <Navbar />
        <SideNav isMenuOpen={isMenuOpen} navigateTo={navigateTo} />

        <button
          className="fixed top-4 right-4  w-14 h-14 flex items-center justify-center z-[90] text-primary lg:hidden"
          onClick={toggleNav}
        >
          <span
            className={`text-3xl fa-solid ${
              isMenuOpen ? "fa-xmark -rotate-180" : "fa-bars rotate-0"
            } transition-all duration-200`}
          />
        </button>
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
