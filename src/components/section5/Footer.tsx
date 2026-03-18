import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-gray-300">

  

 
      <div className="border-t border-slate-800"></div>


      
      <div className="bg-gradient-to-r from-red-700 to-red-900 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center text-sm">

          <div className="text-white font-semibold">
            Cyber<span className="text-yellow-300">World</span>
          </div>

          <div className="text-gray-200 mt-3 lg:mt-0">
            Follow Us:
            <span className="ml-3">🌐</span>
            <span className="ml-3">📘</span>
            <span className="ml-3">📷</span>
            <span className="ml-3">▶</span>
          </div>

        </div>
      </div>


      <div className="bg-black py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CyberWorld. All Rights Reserved.  
        <div className="mt-2">
          Designed & Developed by{" "}
          <span className="text-blue-400 font-semibold">
            CodeWithYash
          </span>
        </div>
      </div>

    </footer>
  );
}
