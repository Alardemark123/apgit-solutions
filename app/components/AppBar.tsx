"use client";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Image from "next/image";
import ToolBar from "@mui/material/Toolbar";
import NavigationLinks from "./NavLinks";
import DrawerMenu from "./DrawerMenu";
import { useEffect, useState } from "react";
import { useScroll } from "motion/react";
import poppins from "../fonts/poppins";
import Link from "next/link";

// App Navigation Bar
const NavBar = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScroll] = useState(false);

  useEffect(() => {
    setHasScroll(scrollY.get() > 0);
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScroll((prev) => {
        const newValue = latest > 0;
        return prev !== newValue ? newValue : prev;
      });
    });

    return unsubscribe;
  }, [scrollY]);

  return (
    <AppBar
      className={poppins.className}
      sx={{
        backgroundColor: hasScrolled ? "#ffffff" : "transparent",
        backgroundImage: hasScrolled
          ? ""
          : "linear-gradient(to bottom, #ffffff, transparent)",
        transition: "opacity 0.2s ease, background-color 0.3s ease",
      }}
      elevation={0}
    >
      <Container>
        <ToolBar
          sx={{
            display: "flex",
            p: 2,
            justifyContent: "space-between",
          }}
        >
          {/* APGIT LOGO */}
          <Link
            href="/"
            onClick={() => {
              sessionStorage.setItem("savedLink", "/");
              window.dispatchEvent(new Event("savedLinkChange"));
            }}
          >
            <Image
              src="/images/APLOGO.png"
              alt="APGIT LOGO"
              width={100}
              height={100}
              className="w-auto h-auto"
              priority={true}
            />
          </Link>

          <NavigationLinks />
          <DrawerMenu />
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
