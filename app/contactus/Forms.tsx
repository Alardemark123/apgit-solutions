"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import Image from "next/image";
import poppins from "../fonts/poppins";
import ReCAPTCHA from "react-google-recaptcha";
import verifyCaptcha from "../recaptcha/RecaptchaServer";
import { useContactForm } from "../hooks/useContactForm";
import handleSubmit from "./functions/handleSubmit";
import ItemLabel from "./ItemLabel";
import { useFormRefs } from "../hooks/useFormRefs";
import TooManyRequests from "../components/TooManyRequests";
import { ValidatableField } from "./functions/contactus.type";
import { FormHelperText } from "@mui/material";
import { useValidationMessages } from "../hooks/useValidationMessage";
import { useFieldValidity } from "../hooks/useFieldValidity";
import SuccessfulModal from "./SuccessfulForm";
import LoadingScreen from "../components/LoadingScreen";
import InternalServerError from "../components/Error500Modal";

export default function ResponsiveColumns() {
  const { state, setField, resetForm } = useContactForm();
  const { validationMessage, setValidationMessage } = useValidationMessages();
  const { fieldValidity, setFieldValidity } = useFieldValidity();
  const refs = useFormRefs();
  const [rateLimited, setRateLimited] = useState(false);
  const [isInternalError, setInternalError] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:899px)");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: SelectChangeEvent) => {
    setField("answer")(e.target.value);
  };

  const handleFieldChange = (field: ValidatableField, value: string) => {
    setField(field)(value);
    setValidationMessage((prev) => ({
      ...prev,
      [field]: "",
    }));
    setFieldValidity((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleCaptchaSubmission = async (token: string | null) => {
    try {
      await verifyCaptcha(token);
      setField("isVerified")(true);
      validationMessage.isVerified = "";
    } catch (error) {
      if (error) {
        setField("isVerified")(false);
      }
    }
  };

  const isFieldInvalid = (field: ValidatableField): boolean => {
    return !fieldValidity[field] ? true : false;
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={poppins.className}>
      <Grid container spacing={2}>
        <Grid container spacing={2}>
          {/* Column 1 - Image and Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={0} sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/APLOGO.png"
                  alt="AP LOGO"
                  width={300}
                  height={200}
                />
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: isSmallScreen ? "13px" : "30px",
                    mt: 2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Start optimizing your wholesale operations today. Message us
                  now, and we{"'"}ll get in touch with you soon!
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Column 2 - Form */}
          <Grid
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
            className={poppins.className}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "90%",
                  lg: "90%",
                },
                maxWidth: { xs: "600px", md: "none" },
                border: "1px solid #ccc",
                boxShadow: 3,
                borderRadius: 6,
                backgroundColor: "#f9f9f9",
                ml: { md: 7 },
                // mr: { md: "3px", lg: "2px" },
                // Adjusted margins
              }}
            >
              <Grid container spacing={2}>
                {/* First Name & Last Name */}
                <Grid size={{ xs: 12, sm: 12, lg: 6, md: 12 }}>
                  <Stack>
                    <ItemLabel
                      className={poppins.className}
                      inputLabel="First Name: "
                      id="first-name"
                      placeholder="Your first name"
                      error={isFieldInvalid("firstName")}
                      helperText={validationMessage.firstName}
                      onChange={(e) =>
                        handleFieldChange("firstName", e.target.value)
                      }
                      value={state.firstName}
                      ref={refs.firstName}
                    />
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, lg: 6, md: 12 }}>
                  <Stack>
                    <ItemLabel
                      className={`${poppins.className}`}
                      inputLabel="Last Name:"
                      id="last-name"
                      placeholder="Your last name"
                      error={isFieldInvalid("lastName")}
                      helperText={validationMessage.lastName}
                      onChange={(e) =>
                        handleFieldChange("lastName", e.target.value)
                      }
                      value={state.lastName}
                      ref={refs.lastName}
                    />
                  </Stack>
                </Grid>

                {/* Company Name & Email */}
                <Grid size={{ xs: 12, sm: 12, lg: 6, md: 12 }}>
                  <Stack>
                    <ItemLabel
                      className={poppins.className}
                      inputLabel="Company Name:"
                      id="company-name"
                      placeholder="Your company name"
                      error={isFieldInvalid("companyName")}
                      helperText={validationMessage.companyName}
                      onChange={(e) =>
                        handleFieldChange("companyName", e.target.value)
                      }
                      ref={refs.companyName}
                      value={state.companyName}
                    />
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, lg: 6, md: 12 }}>
                  <Stack>
                    <ItemLabel
                      className={`${poppins.className}`}
                      inputLabel="Company Email:"
                      id="company-email"
                      placeholder="Your company email"
                      ref={refs.email}
                      value={state.email}
                      error={isFieldInvalid("email")}
                      helperText={validationMessage.email}
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                    />
                  </Stack>
                </Grid>

                {/* Decision Select */}
                <Grid size={{ xs: 12 }}>
                  <Stack>
                    <InputLabel
                      className={poppins.className}
                      id="decision-time-label"
                      sx={{
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        fontSize: "12px",
                        mb: 0.5,
                        whiteSpace: "normal",
                        overflow: "visible",
                        textOverflow: "clip",
                        lineHeight: "1.4",
                      }}
                    >
                      How soon are you looking to make a decision on the
                      service?
                    </InputLabel>
                    <Select
                      id="decision-time"
                      labelId="decision-time-label"
                      size="small"
                      value={state.answer}
                      onChange={handleChange}
                      className={poppins.className}
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        "& fieldset": {
                          borderRadius: 5,
                        },
                        "& .MuiSelect-select": {
                          fontSize: "14px",
                          padding: "6px 12px",
                        },
                        "& .MuiMenuItem-root": {
                          fontSize: "12px",
                        },
                      }}
                    >
                      <MenuItem
                        value="Immediately"
                        sx={{ fontFamily: poppins.style.fontFamily }}
                      >
                        Immediately
                      </MenuItem>
                      <MenuItem
                        value="Within the next 1 week"
                        sx={{ fontFamily: poppins.style.fontFamily }}
                      >
                        Within the next 1 week
                      </MenuItem>
                      <MenuItem
                        value="Within the next 2 weeks"
                        sx={{ fontFamily: poppins.style.fontFamily }}
                      >
                        Within the next 2 weeks
                      </MenuItem>
                      <MenuItem
                        value="Within the next few months"
                        sx={{ fontFamily: poppins.style.fontFamily }}
                      >
                        Within the next few months
                      </MenuItem>
                      <MenuItem
                        value="I am currently prospecting"
                        sx={{ fontFamily: poppins.style.fontFamily }}
                      >
                        I am currently prospecting
                      </MenuItem>
                    </Select>
                  </Stack>
                </Grid>

                {/* Comments */}
                <Grid size={{ xs: 12 }}>
                  <Stack>
                    <InputLabel
                      htmlFor="comments"
                      className={poppins.className}
                      sx={{
                        backgroundColor: "#f9f9f9",
                        fontWeight: "bold",
                        fontSize: "12px",
                        mb: 0.5,
                      }}
                      ref={refs.comments}
                    >
                      Additional Comments or Questions:
                    </InputLabel>
                    <TextField
                      id="comments"
                      required={true}
                      placeholder="Enter your Description"
                      value={state.comments}
                      error={isFieldInvalid("comments")}
                      helperText={validationMessage.comments}
                      onChange={(e) =>
                        handleFieldChange("comments", e.target.value)
                      }
                      fullWidth
                      multiline
                      minRows={4}
                      size="small"
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        "& fieldset": {
                          borderRadius: 5,
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "12px",
                          fontFamily: poppins.style.fontFamily,
                        },
                        "& .MuiInputBase-input::placeholder": {
                          fontFamily: poppins.style.fontFamily,
                          opacity: 0.5,
                          fontSize: "12px",
                        },
                      }}
                    />
                  </Stack>
                </Grid>

                {/* CAPTCHA Placeholder */}
                <Grid size={{ xs: 12 }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                    onChange={handleCaptchaSubmission}
                  />
                  <FormHelperText
                    error={!validationMessage.isVerified ? false : true}
                  >
                    {validationMessage.isVerified}
                  </FormHelperText>

                  <p>
                    {" "}
                    <br />
                  </p>
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    onClick={() =>
                      handleSubmit({
                        state,
                        resetForm,
                        setFieldValidity,
                        setValidationMessage,
                        refs,
                        recaptchaRef,
                        setModalOpen,
                        setRateLimited,
                        setIsLoading,
                        setInternalError,
                      })
                    }
                    className={poppins.className}
                    variant="contained"
                    fullWidth
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      backgroundColor: "#3674b5",
                      color: "white",
                      borderRadius: "25px",
                      textTransform: "none",
                      fontWeight: "bold",
                      padding: "6px 22px",
                      boxShadow: "0 0 0 5px white",
                      fontSize: "11px",
                      height: "40px",
                      "& .MuiButton-label": {
                        letterSpacing: "2px",
                      },
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#3674b5",
                        boxShadow: "0 0 0 5px #3674b5",
                        padding: "6px 22px",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <span className="MuiButton-label">SUBMIT FORM</span>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <TooManyRequests
        open={rateLimited}
        onClose={() => setRateLimited(false)}
      />
      {isLoading && <LoadingScreen />}
      <SuccessfulModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <InternalServerError
        open={isInternalError}
        onClose={() => setInternalError(false)}
      />
    </Box>
  );
}
