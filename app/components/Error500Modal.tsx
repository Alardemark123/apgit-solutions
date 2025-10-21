import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import poppins from "../fonts/poppins";

export default function InternalServerError({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      className={poppins.className}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            border: "2px solid #f44336",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            borderRadius: "20px",
            backgroundColor: "#fff5f5",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: "inherit",
          textAlign: "center",
          color: "#d32f2f",
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        ⚠️ Internal Server Error
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontFamily: "inherit",
            textAlign: "center",
            color: "#212121",
            fontSize: "0.95rem",
            mb: 1,
          }}
        >
          An unexpected error occurred on the server while processing your
          request. <br /> Please try again later or contact support if the
          problem persists.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            fontFamily: "inherit",
            backgroundColor: "#d32f2f",
            color: "white",
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1,
            "&:hover": {
              backgroundColor: "#b71c1c",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
