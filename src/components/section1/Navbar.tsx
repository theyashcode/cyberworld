import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8 text-white">
        
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-blue-400">Cyber</span>World
        </h1>

        <ul className="flex gap-10 font-medium">
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
      </div>
    </nav>
  );
};

export default Navbar;
