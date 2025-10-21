import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import poppins from "../fonts/poppins";

// App Footer
const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <Grid container sx={{ position: "relative", top: 100 }}>
      <Container
        className={poppins.className}
        sx={{
          display: "flex",
          p: 3,
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          rowGap: 4,
        }}
      >
        <Grid
          size={{ lg: 4, md: 6, sm: 12, xs: 12 }}
          sx={{
            display: "inline-grid",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/APGIT-Logo.png"}
            alt="AP GIT LOGO"
            width={100}
            height={100}
            priority={true}
          />
        </Grid>

        <Grid
          size={{ lg: 4, md: 6, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
            Social Media Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.facebook.com/apglobalitsolution"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "#557dbc" }} fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/apgit.solutionsinc/"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "#8a3ab9" }} fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/ap-global-it-solutions-a14770230/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#1c86c6" }} fontSize="large" />
            </a>
          </Box>
        </Grid>

        <Grid
          size={{ lg: 4, md: 6, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            rowGap: 1,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontFamily: "inherit",
              justifyContent: "center",
              alignItems: "center",
              px: 3,
              textAlign: {
                lg: "justify",
                md: "justify",
                sm: "center",
                xs: "center",
              },
            }}
            variant="h6"
          >
            Get in touch with APGIT for the best IT solutions and service.
          </Typography>
          <Typography
            sx={{
              color: "#6e6873",
              px: 3,
              fontFamily: "inherit",
              textAlign: {
                lg: "justify",
                md: "justify",
                sm: "center",
                xs: "center",
              },
            }}
            variant="subtitle2"
          >
            Reach out to APGIT for cutting-edge IT solutions and exceptional
            service, tailored to meet your business needs with innovation and
            expertise.
          </Typography>
        </Grid>
      </Container>
      <Grid
        size={12}
        sx={{ display: "inline-grid", justifyContent: "center", my: 3 }}
        className={poppins.className}
      >
        <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
          Copyright © {getYear} AP Global IT Solutions Inc.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
