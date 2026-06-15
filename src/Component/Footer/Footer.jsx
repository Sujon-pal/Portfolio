import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">
              Sujon<span className="text-cyan-400">.dev</span>
            </h2>
            <p className="text-white/60 mt-3 text-sm leading-relaxed">
              Frontend Developer focused on building clean, modern and high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <NavLink className="hover:text-white transition" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-white transition" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              Get in Touch
            </h3>

            <p className="text-white/60 text-sm">
              Email: sujon.dev@email.com
            </p>

            <div className="flex gap-4 mt-4 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sujon.dev. All rights reserved.
          </p>

          <p className="text-white/50 text-sm">
            Built with React & Tailwind ⚡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;