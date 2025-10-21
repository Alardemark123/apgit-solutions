import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import poppins from "../fonts/poppins";

// Home Tagline
const Tagline = () => {
  return (
    <Stack spacing={1} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          display: "inline-flex",
          fontFamily: "inherit",
          fontSize: "1.125rem",
          justifyContent: {
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          },
          textAlign: { lg: "", sm: "center", xs: "center" },
        }}
      >
        What we can do for you?
      </Typography>

      <Typography
        sx={{
          display: "inline-block",
          fontFamily: "inherit",
          fontWeight: 700,
          textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
          width: { lg: "50%", sm: "100%", xs: "100%" },
          fontSize: { lg: "2.75rem", sm: "1.75rem", xs: "1.4rem" },
        }}
      >
        Shaping your ideas into seamless{" "}
        <Box
          className={poppins.className}
          component="span"
          sx={{
            color: "#3674b5",
          }}
        >
          solutions
        </Box>
        .
      </Typography>
    </Stack>
  );
};

export default Tagline;
