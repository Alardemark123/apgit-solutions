"use client";

import Image from "next/image";
import poppins from "../fonts/poppins"; 

export default function HeroOurPride() {
  return (
    <div
      className="
        relative w-full
        h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[450px]
        overflow-hidden rounded-b-[6rem]"
    >
      <Image
        src="/images/navbarbg.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="
          object-cover
          object-[center_top] sm:object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/0 z-10" />
      <div className="absolute bottom-[100px] sm:bottom-[160px] md:bottom-[200px] left-[10%] sm:left-[5%] md:left-[10%] z-20">
        <h1
          className={`text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold text-gray-700 ${poppins.className}`}
        >
          Our Pride
        </h1>
      </div>
    </div>
  );
}
