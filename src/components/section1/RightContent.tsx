import Link from "next/link";
import React from "react";

const RightContent = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center pl-30">

      <h2 className="font-extrabold text-4xl md:text-6xl leading-tight text-white">
        CyberWorld <br />

        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Fast & Reliable
        </span>
        <br />

        Digital Services
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl">
        Yahan milti hain sabhi online aur government services ek hi jagah.
        Aadhar, PAN, Voter ID, Print aur Online Form – bina tension ke.
      </p>

      <div className="mt-8">
        <Link
          href="/about"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-white font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default RightContent;
