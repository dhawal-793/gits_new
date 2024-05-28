import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex items-center justify-between w-full">
        <div className="w-fit flex">
          <img className="w-16 h-auto" src="/images/gits-logo.png" alt="" />
          <img className="w-16 h-auto" src="/images/nba-logo.png" alt="" />
          <img className="w-16 h-auto" src="/images/rtu-logo.jpg" alt="" />
        </div>
        <div>
          <ul className="flex gap-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
