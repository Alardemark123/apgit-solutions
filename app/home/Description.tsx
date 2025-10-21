import Typography from "@mui/material/Typography";

// First Page Description of Home
const Description = () => {
  return (
    <Typography
      sx={{
        width: { lg: "60%", md: "75%", sm: "100%", xs: "100%" },
        fontFamily: "inherit",
        textAlign: {
          lg: "justify",
          md: "justify",
          sm: "center",
          xs: "center",
        },
      }}
    >
      We shape your ideas into seamless and innovative solutions by combining
      advanced technology, strategic expertise, and a deep understanding of your
      unique needs. Our commitment to excellence ensures that every solution we
      create is efficient, scalable, and tailored to drive your business forward
      in the ever-evolving digital landscape.
    </Typography>
  );
};

export default Description;
