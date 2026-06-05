import Link from "next/link";
import React from "react";

const RightContent = () => {
  return (
    // 1. Yahan se 'md:w-1/2' hata diya hai kyunki parent already 50% width de raha hai
    <div className="w-full flex flex-col justify-center md:pl-10 text-center md:text-left z-10 py-4">

      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white pt-2">
        CyberWorld <br />
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-1 inline-block">
          Fast & Reliable
        </span>
        <br />
        Digital Services
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 md:mt-6 max-w-xl mx-auto md:mx-0">
        Yahan milti hain sabhi online aur government services ek hi jagah.
        Aadhar, PAN, Voter ID, Print aur Online Form – bina tension ke.
      </p>

      <div className="mt-8 mb-4">
        {/* 2. Yahan 'inline-block' add kiya hai taaki button bahar na bhage aur apni jagah le */}
        <Link
          href="/about"
          className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-3 rounded-full text-white font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 inline-block"
        >
          Explore Services
        </Link>
      </div>

    </div>
  );
};

export default RightContent;