"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/kotakbank.png",
  "/images/railway.jpeg",
  "/images/ayushmancard.jpeg",
  "/images/ignoue.png",
];

function Section3() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-white text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          🚀 How It Works
        </h2>

        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-2xl bg-slate-800">
          
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt="slide"
                fill
                className={`
                  transition-all duration-500
                  
                  object-contain p-4   
                  sm:object-cover sm:p-0   
                `}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Section3;