"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import poppins from "../fonts/poppins";

const Footer = () => {

  return (
    <footer
      // className={`${poppins.className} relative w-full mt-10 bg-gradient-to-br from-[#578fca] to-[#2a6db5] text-white`}
      className={`${poppins.className} relative w-full mt-10  text-gray-800`}
    >
      {/* Background Image + Blur */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/APLOGO.png"
          alt="Footer Background"
          fill
          className="object-cover w-full h-full blur-sm brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div> */}

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/APLOGO.png"
            alt="AP GIT Logo"
            width={200}
            height={200}
            priority
          />
          <p className="mt-3 text-sm md:text-base text-gray-800/90">
            Empowering businesses through innovative IT solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
            Contact Us
          </h3>
          <p className="text-sm md:text-base text-gray-800/80 leading-relaxed">
            3rd Floor, S Building,
            <br />
            Mandaluyong City, Philippines
          </p>
          <p className="text-sm md:text-base text-gray-800/80 mt-1">
            Phone: +63 927 123 4567
          </p>
          <p className="text-sm md:text-base text-gray-800/80 mt-1">
            Email: info@apgit.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
            Quick Links
          </h3>
          {[
            { label: "Home", href: "/" },
            { label: "Our Company", href: "/our-company" },
            { label: "Our Pride", href: "/ourpride" },
            { label: "Contact Us", href: "/contact" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block mt-1 text-sm md:text-base text-gray-800/90 hover:text-gray-800 hover:underline transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
  <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
    Follow Us
  </h3>
  <div className="flex flex-col items-center md:items-start gap-3">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/apglobalitsolution"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition"
    >
      <FaFacebookF className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Facebook</span>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/apgit.solutionsinc/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition"
    >
      <FaInstagram className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Instagram</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/ap-global-it-solutions-a14770230/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
    >
      <FaLinkedinIn className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">LinkedIn</span>
    </a>
  </div>
</div>


      </div>

      {/* Divider */}
      <div className="relative z-10 w-[90%] md:w-[85%] h-px bg-white/30 mx-auto my-6"></div>

      {/* Copyright */}
      <p className="relative z-10 text-center text-sm md:text-base text-gray-800/80 mb-6">
        © {typeof window !== "undefined" ? new Date().getFullYear() : ""} AP Global IT Solutions Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
