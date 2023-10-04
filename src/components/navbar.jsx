
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-200 py-5">
      <div className="align-element flex justify-between">
        <h1 className="text-4xl">Articles</h1>
        <div className="flex items-center gap-4">
          <NavLink
            className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
