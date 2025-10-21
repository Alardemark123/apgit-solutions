"use client";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerSmall from "./DrawerSmall";

// Drawer Trigger
const DrawerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <IconButton
      onClick={() => setOpen(!isOpen)}
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
      }}
    >
      <MenuIcon sx={{ color: "gray" }} />
      <DrawerSmall isOpen={isOpen} setOpen={setOpen} />
    </IconButton>
  );
};

export default DrawerMenu;
