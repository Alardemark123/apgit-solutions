"use client";
import * as React from "react";

import Link from "next/link";
import poppins from "../fonts/poppins";
interface ContactUsButtonProps {
  label: string;
  href?: string; // Optional: if provided, button becomes a link
}

export default function ContactUsButton({ label, href }: ContactUsButtonProps) {
  const button = (
    <button
      className="
        
        rounded-full
        border-4
        border-[#578fca]
        text-[#578fca]
        bg-white
        px-6 
        py-2
        font-bold 
        transition 
        duration-300 
        hover:bg-[#578fca]
        hover:text-white
        hover:border-white
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
