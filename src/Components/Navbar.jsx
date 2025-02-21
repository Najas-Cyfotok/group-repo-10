import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-20 bg-black text-white flex items-center justify-between px-6 md:px-12 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <img src="/logo.png" alt="logo" className="h-20 " />
        <span>MyShop</span>
      </Link>
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-pink-500 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-pink-500 transition">About</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-pink-500 transition">Products</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-pink-500 transition">Contact</Link>
        </li>
      </ul>
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
      </button>
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white py-5 flex flex-col items-center space-y-5 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg hover:text-pink-500 transition">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg hover:text-pink-500 transition">About</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="text-lg hover:text-pink-500 transition">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-pink-500 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
