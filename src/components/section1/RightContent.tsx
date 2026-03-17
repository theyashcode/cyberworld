import Link from "next/link";
import React from "react";

const RightContent = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0 md:pl-10 text-center md:text-left">

      <h2 className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
        CyberWorld <br />

        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Fast & Reliable
        </span>
        <br />

        Digital Services
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 md:mt-6 max-w-xl mx-auto md:mx-0">
        Yahan milti hain sabhi online aur government services ek hi jagah.
        Aadhar, PAN, Voter ID, Print aur Online Form – bina tension ke.
      </p>

      <div className="mt-6 md:mt-8">
        <Link
          href="/about"
          className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-full text-white font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Explore Services
        </Link>
      </div>

    </div>
  );
};

export default RightContent;