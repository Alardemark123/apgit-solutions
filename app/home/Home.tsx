import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import poppins from "../fonts/poppins";
import Tagline from "./Tagline";
import Description from "./Description";
import CommunicateButtons from "./CommunicateButtons";
import OfferWords from "./OfferWords";
import Services from "./Services";

// Home Layout
const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 1,
          backgroundImage: `url('/images/APGhome-BG.jpg')`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack spacing={3} sx={{ px: 3 }} className={poppins.className}>
            <Tagline />
            <Description />
            <CommunicateButtons />
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "auto",
          zIndex: 2,
          backgroundColor: "#f6f6f6",
          display: "block",
          pt: 4,
          pb: 4,
        }}
      >
        <Container>
          <Stack spacing={3} sx={{ px: 3 }} className={poppins.className}>
            <OfferWords />
            <Services />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
