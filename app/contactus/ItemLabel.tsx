import React from "react";
import { TextField, InputLabel } from "@mui/material";
import poppins from "../fonts/poppins";

export type CustomItemLabelProps = {
  error?: boolean;
  inputLabel: string;
  label?: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  helperText?: string;
};

const ItemLabel = React.forwardRef<HTMLInputElement, CustomItemLabelProps>(
  (
    {
      error,
      inputLabel,
      label,
      id,
      placeholder,
      value,
      onChange,
      className,
      helperText,
    },
    ref
  ) => (
    <>
      <InputLabel
        htmlFor={id}
        sx={{
          fontFamily: "inherit",
          fontWeight: "bold",
          fontSize: "12px",
          mb: 0.5,
        }}
      >
        {inputLabel}
      </InputLabel>
      <TextField
        inputRef={ref}
        error={error}
        size="small"
        placeholder={placeholder}
        id={id}
        value={value}
        label={label}
        helperText={helperText}
        onChange={onChange}
        fullWidth
        className={className}
        slotProps={{
          formHelperText: {
            sx: {
              bgcolor: "transparent",
            },
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "#ffff",
            borderRadius: 5,
          },
          borderRadius: 5,
          "& fieldset": { borderRadius: 5 },
          "& .MuiInputBase-input": {
            fontSize: "13px",
            fontFamily: poppins.style.fontFamily,
          },
        }}
      />
    </>
  )
);

ItemLabel.displayName = "ItemLabel";

export default ItemLabel;
