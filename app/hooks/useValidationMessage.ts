import { useState } from "react";
import { MessageField } from "../contactus/functions/contactus.type";

export const useValidationMessages = () => {
  const [validationMessage, setValidationMessage] = useState<
    Record<MessageField, string>
  >({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    comments: "",
    isVerified: "",
  });

  return {
    validationMessage,
    setValidationMessage,
  };
};
