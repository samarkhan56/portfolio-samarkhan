import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          Samar<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="glass w-10 h-10 rounded-full flex items-center justify-center"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass max-w-7xl mx-auto mt-3 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;