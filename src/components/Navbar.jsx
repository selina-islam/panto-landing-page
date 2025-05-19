import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

// Navigation links array
const navItems = [
  { path: "/", element: "Home" },
  { path: "/about", element: "About Us" },
  { path: "/contact", element: "Contact" },
  { path: "/shop", element: "Shop" },
];

// Reusable component to render nav links (for both desktop and mobile)
const NavItems = ({ handleToggle }) => (
  <ul className="flex flex-col md:flex-row items-center gap-6">
    {navItems.map((item, index) => (
      <li key={index} onClick={handleToggle}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          {item.element}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for opening/closing mobile menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Fixed header with top positioning
    <header className="fixed top-0 right-0 left-0 z-50 transition duration-300 ease-in-out text-white">
      <nav className="max-w-7xl container mx-auto flex justify-between items-center py-6 md:px-4 px-2">
        {/* Brand logo */}
        <NavLink to="/" className="font-bold">
          Panto
        </NavLink>
        {/* Hamburger icon (visible only on small screens) */}
        <div
          onClick={handleToggle}
          className="md:hidden text-xl cursor-pointer"
        >
          {isOpen ? null : <FaBars />}
        </div>
        {/* Desktop navigation links (hidden on small screens) */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* Mobile menu overlay (only visible when isOpen is true) */}
        <div
          className={` fixed top-0 left-0 h-screen w-full bg-black/80 flex items-center  justify-center text-white transition-transform transform md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close icon for mobile menu */}
          <div
            className="cursor-pointer absolute top-0 right-0 py-6 px-3 text-xl"
            onClick={handleToggle}
          >
            <FaTimes />
          </div>
          {/* Mobile navigation links */}
          <NavItems handleToggle={handleToggle} />
        </div>
        {/* Shopping cart icon (only on desktop) */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl" />
          <sup className="absolute top-0 -right-3 bg-primary w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
