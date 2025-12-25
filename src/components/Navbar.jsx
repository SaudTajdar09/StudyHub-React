import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full max-w-full z-50 bg-[#16203b] shadow box-border">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-4 box-border">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-blue-400 whitespace-nowrap">
          Study<span className="text-white">Hub</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-white transition duration-300
                hover:text-blue-400
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-blue-400
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-full bg-[#16203b] box-border">
          <div className="flex flex-col px-4 pb-4 gap-4">
            {links.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-base py-2 border-b border-white/20
                  active:text-blue-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
