"use client";
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { AlternateEmail, LocationOn, PhoneEnabled } from "@mui/icons-material";
import poppins from "../fonts/poppins";

export default function Contacts() {
  const isSingleColumn = useMediaQuery("(max-width:899px)");

  return (
    <Box sx={{ flexGrow: 1 }} className={poppins.className}>
      <Grid container spacing={2}>
        {" "}
        {/* Only added this line */}
        {/* COLUMN 1 - CONTACT DETAILS (COMPLETELY UNCHANGED) */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              py: 5,
              height: "100%", // Added to match height
              display: "flex", // Added to match height
              flexDirection: "column", // Added to match height
            }}
          >
            <Typography
              gutterBottom
              align={isSingleColumn ? "center" : "left"}
              sx={{
                fontWeight: "bold",
                fontFamily: "inherit",
                fontSize: "20px",
                mb: isSingleColumn ? 5 : 4,
              }}
            >
              Contact Details
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
                flexGrow: 1, // Added to fill space
              }}
            >
              {/* Vertical connecting line - full height */}
              {!isSingleColumn && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 29,
                    top: "7%",
                    bottom: "5%",
                    borderLeft: "1px dotted #4c73ff",
                    zIndex: 1,
                  }}
                />
              )}

              {/* Address Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSingleColumn ? "column" : "row",
                  alignItems: isSingleColumn ? "center" : "center",
                  zIndex: 2,
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#cbd3dc",
                    width: 55,
                    height: 55,
                    mb: isSingleColumn ? 1 : 0,
                  }}
                >
                  <LocationOn sx={{ color: "#3674b5" }} />
                </Avatar>
                <Box
                  sx={{
                    ml: isSingleColumn ? 0 : 2,
                    textAlign: isSingleColumn ? "center" : "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "inherit",
                      fontWeight: "bold",
                      color: "#3674b5",
                      fontSize: "20px",
                    }}
                  >
                    Mediko Kapitolyo Bldg.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "14px",
                      fontWeight: 100,
                      mb: isSingleColumn ? 5 : 0,
                    }}
                  >
                    Circumferential Rd. Brgy. San Roque
                    <br />
                    Antipolo City, Philippines 1870
                  </Typography>
                </Box>
              </Box>

              {/* Phone Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSingleColumn ? "column" : "row",
                  alignItems: isSingleColumn ? "center" : "center",
                  zIndex: 2,
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#cbd3dc",
                    width: 55,
                    height: 55,
                    mb: isSingleColumn ? 1 : 0,
                  }}
                >
                  <PhoneEnabled sx={{ color: "#3674b5" }} />
                </Avatar>
                <Box
                  sx={{
                    my: isSingleColumn ? 0 : 4,
                    ml: isSingleColumn ? 0 : 2,
                    textAlign: isSingleColumn ? "center" : "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "inherit",
                      fontWeight: "bold",
                      color: "#3674b5",
                      fontSize: "20px",
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    sx={{
                      mb: isSingleColumn ? 6 : 0,
                      fontSize: "14px",
                      fontFamily: "inherit",
                    }}
                  >
                    + (02) 8556 7456
                    <br />+ 09171607336
                  </Typography>
                </Box>
              </Box>

              {/* Email Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSingleColumn ? "column" : "row",
                  alignItems: isSingleColumn ? "center" : "center",
                  zIndex: 2,
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#cbd3dc",
                    width: 55,
                    height: 55,
                    mb: isSingleColumn ? 1 : 0,
                  }}
                >
                  <AlternateEmail sx={{ color: "#3674b5" }} />
                </Avatar>
                <Box
                  sx={{
                    ml: isSingleColumn ? 0 : 2,
                    textAlign: isSingleColumn ? "center" : "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "inherit",
                      fontWeight: "bold",
                      color: "#3674b5",
                      fontSize: "20px",
                    }}
                  >
                    Our Email
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontFamily: "inherit" }}>
                    info@apgitsolutions.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        {/* COLUMN 2 - MAP LOCATION (only height adjusted) */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              py: 5,
              height: isSingleColumn ? "60vh" : "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: isSingleColumn ? "center" : "flex-start",
              width: "100%", // Full width on all screens
              margin: { xs: "20px 0", md: "0 0 0 8px" }, // Adjusted margins
            }}
          >
            <Typography
              gutterBottom
              align={isSingleColumn ? "center" : "left"}
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "inherit",
              }}
            >
              Map Location
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                borderRadius: 2,
                overflow: "hidden",
                mt: 1,
                width: "100%", // Full width on all screens
                // maxWidth: isSingleColumn ? "80%" : "92%", // Remove max-width on large screens
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1930.629308805505!2d121.16884600000002!3d14.584334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b96ac2d4fae9%3A0x2ccf32276312ee51!2sMediko%20Kapitolyo%20Multispecialty%20and%20Diagnostic%20Clinic!5e0!3m2!1sen!2sph!4v1750041900851!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
