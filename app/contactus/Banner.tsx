"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import poppins from "../fonts/poppins";

const Banner = () => {
  return (
    <Box
      className={poppins.className}
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "300px",
          sm: "400px",
          md: "450px",
        },
        overflow: "hidden",
        borderBottomLeftRadius: "6rem",
        borderBottomRightRadius: "6rem",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/navbarbg.png"
        alt="Hero Banner"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "bottom", // match Tailwind's object-[center_top]
        }}
        priority
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
          zIndex: 10,
        }}
      />

      {/* Title */}
      <Box
        // className={poppins.className}
        sx={{
          position: "absolute",
          bottom: {
            xs: "100px",
            sm: "165px",
            md: "188px",
          },
          left: {
            xs: "10%",
            sm: "5%",
            md: "10%",
          },
          zIndex: 20,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "2.25rem", // text-4xl
              sm: "3.25rem",
              md: "3.75rem", // text-6xl
              lg: "3.75rem",
            },
           
            fontWeight: 600,
            fontFamily: "inherit",
            color: "#4B5563", // text-gray-700
          }}
        >
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
