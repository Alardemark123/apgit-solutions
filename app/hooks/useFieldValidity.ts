import { useState } from "react";
import { ValidatableField } from "../contactus/functions/contactus.type";

export const useFieldValidity = () => {
  const [fieldValidity, setFieldValidity] = useState<
    Record<ValidatableField, boolean>
  >({
    firstName: true,
    lastName: true,
    companyName: true,
    email: true,
    comments: true,
  });

  return {
    fieldValidity,
    setFieldValidity,
  };
};
