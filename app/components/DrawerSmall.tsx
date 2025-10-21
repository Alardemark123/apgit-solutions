"use client";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { default as NavLink } from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ContactsIcon from "@mui/icons-material/Contacts";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Drawer Navigation Links
type NavLink = {
  href: string;
  title: string;
  icon: React.ComponentType<SvgIconProps>;
};

type NavLinksDrawerProps = {
  showOnSmallScreen: boolean;
};
const NavLinksDrawer = ({ showOnSmallScreen = false }: NavLinksDrawerProps) => {
  const [activeLink, setActiveLink] = useState("");

  const navLinks: NavLink[] = [
    { href: "/", title: "Home", icon: HomeIcon },
    { href: "/aboutus", title: "About Us", icon: InfoIcon },
    { href: "/ourpride", title: "Our Pride", icon: FingerprintIcon },
    { href: "/contactus", title: "Contact Us", icon: ContactsIcon },
  ];

  useEffect(() => {
    const getSavedLink = sessionStorage.getItem("savedLink");

    if (getSavedLink != null) {
      setActiveLink(getSavedLink);
    } else {
      setActiveLink("/");
    }
  }, []);

  return (
    <Box
      arial-label="Navigation Links Drawer"
      sx={{
        display: {
          xs: showOnSmallScreen ? "flex" : "none",
          md: showOnSmallScreen ? "none" : "flex",
        },
        rowGap: 1,
        flexDirection: "column",
      }}
    >
      {navLinks.map((navlink, index) => (
        <Link
          key={index}
          component={NavLink}
          href={navlink.href}
          onClick={() => {
            setActiveLink(navlink.href);
            sessionStorage.setItem("savedLink", navlink.href);
          }}
          sx={{
            display: "inline-flex",
            textDecoration: "none",
            p: 1,
            columnGap: 1,
            alignItems: "center",
            borderRadius: "16px",
            color: "#007ba7",
            backgroundColor: activeLink === navlink.href ? "#dceffc" : "",
            transform: activeLink === navlink.href ? "scale(0.98)" : "",
            "&:hover": {
              backgroundColor: "#f0f8ff",
            },
          }}
        >
          {<navlink.icon />}
          {navlink.title}
        </Link>
      ))}
    </Box>
  );
};

type DrawerSmallProps = {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
};

const DrawerSmall = ({ isOpen, setOpen }: DrawerSmallProps) => {
  const theme = useTheme();
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMediumOrLarger && isOpen) {
      setOpen(false);
    }
  }, [isMediumOrLarger, isOpen, setOpen]);

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{ display: { lg: "none", md: "none" } }}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: "75%",
              sm: "50%",
            },
            transition: "transform 0.3s ease-in-out",
          },
        },
      }}
    >
      <Container>
        <Link component={NavLink} href="/" className="p-1">
          <Image
            src="/APGIT-Logo.png"
            alt="APGIT LOGO"
            width={50}
            height={50}
            priority={true}
          />
          <Divider sx={{ mt: 3, border: 2 }}></Divider>
        </Link>

        <NavLinksDrawer showOnSmallScreen={true} />
      </Container>
    </Drawer>
  );
};

export default DrawerSmall;
