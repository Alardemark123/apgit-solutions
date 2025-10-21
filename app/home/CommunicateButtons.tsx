"use client";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

// Get Started and Let's Talk Buttons
const CommunicateButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", sm: "row", xs: "column" },
        alignItems: "center",
        justifyContent: {
          lg: "flex-start",
          md: "flex-start",
          sm: "center",
          xs: "center",
        },
      }}
      columnGap={2}
      rowGap={2}
    >
      <Button
        component={Link}
        onClick={() => {
          sessionStorage.setItem("savedLink", "/aboutus");
          window.dispatchEvent(new Event("savedLinkChange"));
        }}
        href="/aboutus"
        variant="outlined"
        size="medium"
        sx={{
          fontFamily: "inherit",
          width: "10rem",
          height: "3rem",
          backgroundColor: "#578fca",
          borderRadius: "9999px",
          border: 4,
          borderColor: "#fff",
          fontSize: "12px",
          letterSpacing: "2px",
          fontWeight: "bold",
          color: "#fff",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#578fca",
            border: 4,
            borderColor: "#578fca",
          },
        }}
      >
        Get Started
      </Button>
      <Button
        component={Link}
        onClick={() => {
          sessionStorage.setItem("savedLink", "/contactus");
          window.dispatchEvent(new Event("savedLinkChange"));
        }}
        href="/contactus"
        variant="outlined"
        size="large"
        sx={{
          fontFamily: "inherit",
          width: "10rem",
          height: "3rem",
          borderRadius: "9999px",
          border: 4,
          borderColor: "#578fca",
          backgroundColor: "#fff",
          fontSize: "12px",
          letterSpacing: "2px",
          fontWeight: "bold",
          color: "#578fca",
          "&: hover": {
            backgroundColor: "#578fca",
            color: "white",
            borderRadius: "9999px",
          },
        }}
      >
        Let{"'"}s Talk
      </Button>
    </Box>
  );
};

export default CommunicateButtons;
