"use client";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { default as NavLink } from "next/link";
import { useEffect, useState } from "react";

// Big screen navigation links
type NavLink = {
  href: string;
  title: string;
};

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("");
  const navLinks: NavLink[] = [
    { href: "/", title: "Home" },
    { href: "/aboutus", title: "About Us" },
    { href: "/ourpride", title: "Our Pride" },
    { href: "/contactus", title: "Contact Us" },
  ];

  useEffect(() => {
    const handleStorageChange = () => {
      const getSavedLink = sessionStorage.getItem("savedLink");

      setActiveLink(getSavedLink ?? "/");
    };

    // Run once initially
    handleStorageChange();

    // Listen for savedLink changes
    window.addEventListener("savedLinkChange", handleStorageChange);

    return () => {
      window.removeEventListener("savedLinkChange", handleStorageChange);
    };
  }, []);
  return (
    <Box
      arial-label="Navigation Links"
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        columnGap: 1.5,
        flexDirection: "row",
      }}
    >
      {navLinks.map((navlink, index) => (
        <Link
          prefetch={true}
          key={index}
          component={NavLink}
          href={navlink.href}
          onClick={() => {
            setActiveLink(navlink.href);
            sessionStorage.setItem("savedLink", navlink.href);
          }}
          sx={{
            display: "inline-block",
            textDecoration: "none",
            px: 1.5,
            py: 0.5,
            borderRadius: "10px",
            transition: "transform 0.3s ease",
            color: activeLink === navlink.href ? "#007ba7" : "black",
            transform: activeLink === navlink.href ? "scale(1.1)" : "",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          {navlink.title}
        </Link>
      ))}
    </Box>
  );
};

export default NavigationLinks;
