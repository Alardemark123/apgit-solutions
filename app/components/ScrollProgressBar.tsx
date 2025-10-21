"use client";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      component={motion.div}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: "#007ba7",
        transformOrigin: "left",
        zIndex: 1200,
      }}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgressBar;
