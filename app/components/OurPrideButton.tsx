"use client";
import * as React from "react";
import poppins from "../fonts/poppins";
import Link from "next/link";

interface OurPrideButtonProps {
  label: string;
  href?: string; // Optional: if provided, button becomes a link
}

export default function OurPrideButton({ label, href }: OurPrideButtonProps) {
  const button = (
    <button
      className="
  

        rounded-full  
        border-4
        border-white
        text-white
        bg-[#578fca]
        px-6 
        py-2
        font-bold 
        transition 
        duration-300 
        hover:bg-white
        hover:text-[#578fca]
        hover:border-[#578fca]
        sm: mr-13
        xl:ml-13
        tracking-widest
        text-xs
        w-35
        h-12
        
      "
    >
      {label}
    </button>
  );

  return (
    <div className={`flex mt-10 ml-20 justify-center ${poppins.className}`}>
      {href ? (
        <Link
          href={href}
          onClick={() => {
            sessionStorage.setItem("savedLink", href);
            window.dispatchEvent(new Event("savedLinkChange"));
          }}
        >
          {button}
        </Link>
      ) : (
        button
      )}
    </div>
  );
}
