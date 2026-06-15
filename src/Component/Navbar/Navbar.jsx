import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme to html tag
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-yellow-400">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="hover:text-yellow-400">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-yellow-400">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="hover:text-yellow-400">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="navbar bg-blue-600 dark:bg-gray-900 text-white rounded-full px-6 shadow-lg max-w-6xl">

        {/* LOGO */}
        <div className="navbar-start">
          <div className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full">
            Olivia.
          </div>
        </div>

        {/* MENU (DESKTOP) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* DARK MODE TOGGLE */}
        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition"
          >
            {theme === "dark" ? (
              <>
                <FaSun />
                <span>Light</span>
              </>
            ) : (
              <>
                <FaMoon />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden ml-2">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            ☰
          </div>
          <ul className="menu dropdown-content mt-3 p-3 shadow bg-gray-800 text-white rounded-box w-52">
            {navLinks}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;