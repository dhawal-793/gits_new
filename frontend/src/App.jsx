import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./AllRoutes";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <Navbar isMenuOpen={isMenuOpen}/>
        <button
          className="fixed top-4 right-4  w-14 h-14 flex items-center justify-center z-90 text-primary lg:hidden"
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
