"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";

// Home services
type ServiceImagesProps = {
  image: string;
  title: string;
  description: string;
};

const GridContentServices = ({
  image,
  title,
  description,
}: ServiceImagesProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        backgroundColor: "#f6f4fb",
        borderRadius: "16px",
        alignItems: "center",
        boxShadow: 3,
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column", p: 5 }}>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={`${image}`}
            width={200}
            height={200}
            className="object-cover w-auto h-auto"
            alt="Services Logo"
            priority={true}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "inherit",
            fontWeight: 700,
            display: "flex",
            py: 1,
            justifyContent: {
              lg: "flex-start",
              sm: "center",
              xs: "center",
            },
            textAlign: {
              lg: "justify",
              sm: "center",
              xs: "center",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "inherit",
            display: "flex",
            justifyContent: {
              lg: "flex-start",
              sm: "center",
              xs: "center",
            },
            textAlign: {
              lg: "justify",
              sm: "center",
              xs: "center",
            },
          }}
        >
          {description}
        </Typography>
      </Container>
    </Paper>
  );
};

const Services = () => {
  const serviceImages: ServiceImagesProps[] = [
    {
      image: "/images/UI-UX-Design.png",
      title: "UI/UX Design",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process",
    },
    {
      image: "/images/AppDevelopment.png",
      title: "App Development",
      description:
        "Build high-performing apps with expert development, delivered efficiently through a clear and effective coding strategy",
    },
    {
      image: "/images/cloud-migration.png",
      title: "Cloud Migration",
      description:
        "Seamlessly migrate to the cloud with expert solutions, delivered efficiently through a clear and effective transition strategy.",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ pt: 4 }}>
      {serviceImages.map((service, index) => (
        <Grid
          key={service.image}
          size={{ lg: 4, md: 4, sm: 6, xs: 12 }}
          sx={{ mx: index === 2 ? "auto" : 0 }}
        >
          <GridContentServices
            image={service.image}
            title={service.title}
            description={service.description}
          />
        </Grid>
      ))}
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <Button
          component={Link}
          onClick={() => {
            sessionStorage.setItem("savedLink", "/ourpride");
            window.dispatchEvent(new Event("savedLinkChange"));
          }}
          href="/ourpride"
          variant="outlined"
          size="medium"
          sx={{
            fontFamily: "inherit",
            width: "10rem",
            height: "3rem",
            borderRadius: "9999px",
            backgroundColor: "#578fca",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "12px",
            border: 4,
            textTransform: "none",
            color: "#fff",
            borderColor: "#fff",

            "&:hover": {
              backgroundColor: "transparent",
              color: "#578fca",
              border: 4,
              borderColor: "#578fca",
            },
          }}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default Services;
