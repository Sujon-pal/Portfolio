import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    < >
      <li>
        <NavLink to="/" className={({ isActive }) =>
          ` transition-colors duration-200 ${isActive ? "text-amber-700" : "text-gray-800 hover:text-amber-700"}`
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) =>
          ` transition-colors duration-200 ${isActive ? "text-amber-700" : "text-gray-800 hover:text-amber-700"}`
        }>About</NavLink>
      </li>
      <li>
        <NavLink to="/skills" className={({ isActive }) =>
          ` transition-colors duration-200 ${isActive ? "text-amber-700" : "text-gray-800 hover:text-amber-700"}`
        }>Skills</NavLink>
      </li>
      <li>
        <NavLink to="/Projects" className={({ isActive }) =>
          ` transition-colors duration-200 ${isActive ? "text-amber-700" : "text-gray-800 hover:text-amber-700"}`
        }>Projects</NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className={({ isActive }) =>
          ` transition-colors duration-200 ${isActive ? "text-amber-700" : "text-gray-800 hover:text-amber-700"}`
        }>Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white/30 backdrop-blur-sm z-50 border border-amber-400 rounded-3xl  ">
      <div className="px-8 flex items-center justify-between h-14 font-bold" >

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-amber-700">Sujon</NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm text-amber-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-amber-50 rounded-box z-10 mt-3 w-52 p-2 shadow border border-amber-200 list-none">
            {navLinks}
            <li className="mt-2">
              <NavLink to="/contact" className="bg-amber-800 text-white rounded-full text-center font-semibold">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;