import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChartNoAxesGantt } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between shadow-md px-8 md:px-20 py-8">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 font-bold text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fe6e48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hotel"
        >
          <path d="M10 22v-6.57" />
          <path d="M12 11h.01" />
          <path d="M12 7h.01" />
          <path d="M14 15.43V22" />
          <path d="M15 16a5 5 0 0 0-6 0" />
          <path d="M16 11h.01" />
          <path d="M16 7h.01" />
          <path d="M8 11h.01" />
          <path d="M8 7h.01" />
          <rect x="4" y="2" width="16" height="20" rx="2" />
        </svg>
        <h1 className="text-xl">Elite Homes</h1>
      </Link>

      {/* Hamburger Menu */}
      <button
        className="block z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="text-gray-400 hover:text-white" size={28} /> : <ChartNoAxesGantt size={28} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        {[
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="relative flex text-gray-500 group transition-all duration-300"
          >
            {/* Circle appears on hover */}
            <span className="absolute left-[-15px] h-2 w-2 bg-primary rounded-full opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"></span>
            <span className="transition-transform duration-300 group-hover:text-black">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="z-40 absolute w-full md:w-1/2 h-full top-0 right-0 bg-secondary text-[2.5rem] md:text-[4vw] shadow-lg  p-4 flex gap-0 md:gap-14 flex-col items-start pl-[20vw] md:pl-[10vw] justify-center transition-all ease-in-out">
          {[
            { name: "Home", path: "/" },
            { name: "Properties", path: "/properties" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative flex items-center py-2 px-6 text-gray-500 hover:text-white group transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute left-[-15px] h-2 w-2 bg-primary rounded-full opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"></span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
