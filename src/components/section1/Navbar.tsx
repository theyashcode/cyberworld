"use client"

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8 text-white">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
          <span className="text-blue-400">Cyber</span>World
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;