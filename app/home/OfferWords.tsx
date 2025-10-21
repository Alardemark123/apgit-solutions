import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Second Page Services in Home
const OfferWords = () => {
  return (
    <Box
      rowGap={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontFamily: "inherit" }}>
        What we can do for you
      </Typography>
      <Typography
        sx={{
          fontSize: "2rem",
          textAlign: "center",
          fontFamily: "inherit",
          fontWeight: 700,
        }}
      >
        Explore the{" "}
        <Box
          component={"span"}
          sx={{ color: "#3674b5", fontFamily: "inherit", fontWeight: 700 }}
        >
          services
        </Box>{" "}
        we offer to support your{" "}
        <Box
          component={"span"}
          sx={{ color: "#3674b5", fontFamily: "inherit", fontWeight: 700 }}
        >
          needs.
        </Box>
      </Typography>
      <Typography align="center" sx={{ fontFamily: "inherit" }}>
        We shape your ideas into seamless and innovative solutions by combining
        advanced technology, strategic expertise, and a deep understanding of
        your unique needs. Our commitment to excellence ensures that every
        solution we create is efficient, scalable, and tailored to drive your
        business forward in the ever-evolving digital landscape.
      </Typography>
    </Box>
  );
};

export default OfferWords;
