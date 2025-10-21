"use client";

import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative w-30 h-30">
        {/* Rotating thick ring */}
        <div className="absolute inset-0 border-[5px] border-[#3674b5] rounded-[20%] opacity-10 animate-spin-clockwise" />

        {/* Rotating thin ring in reverse */}
        <div className="absolute inset-0 border-[2px] border-[#3674b5] rounded-[20%] opacity-10 animate-spin-counter" />

        {/* Center Logo */}
        <Image
          src="/APGIT-Logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 object-contain"
        />
      </div>
    </div>
  );
}
