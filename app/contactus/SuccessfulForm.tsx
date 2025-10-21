"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  border: 3,
  color: "#379e42",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", // Center vertically
  textAlign: "center",
};

type SuccessfulModalProps = {
  isModalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
};
export default function SuccessfulModal({
  isModalOpen,
  setModalOpen,
}: SuccessfulModalProps) {
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Dialog
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth={"xs"}
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "20px",
            },
          },
        }}
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#abacb8",
            }}
          >
            <CloseIcon />
          </IconButton>
          {/* Centered Content Stack */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              width: "100%",
              px: 1, // Horizontal padding for text
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "#379e42",
                fontSize: "4rem",
                mb: 0,
              }}
            />

            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "#379e42",
                fontWeight: "bold",
              }}
            >
              Successful!
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Form Submitted Successfully!
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
