import { State } from "@/app/hooks/useContactForm";
import type { RefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export type ValidatableField = Exclude<keyof State, "isVerified" | "answer">;
export type MessageField = Exclude<keyof State, "answer">;

// Object for field validity, where each field has its state if it is valid or not
export const fieldValidity: Record<ValidatableField, boolean> = {
  firstName: true,
  lastName: true,
  companyName: true,
  email: true,
  comments: true,
};

// Object for validation message, where each input has its own message
export const validationMessage: Record<MessageField, string> = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  comments: "",
  isVerified: "",
};

export const requiredFields: ValidatableField[] = [
  "firstName",
  "lastName",
  "companyName",
  "email",
  "comments",
];

export type HandleSubmit = {
  state: State;
  resetForm: () => void;
  setFieldValidity: React.Dispatch<
    React.SetStateAction<Record<ValidatableField, boolean>>
  >;
  setValidationMessage: React.Dispatch<
    React.SetStateAction<Record<MessageField, string>>
  >;
  refs: { [key: string]: RefObject<HTMLElement | null> };
  recaptchaRef: RefObject<ReCAPTCHA | null>;
  setModalOpen: (arg: boolean) => void;
  setRateLimited: (v: boolean) => void;
  setIsLoading?: (arg: boolean) => void;
  setInternalError: (arg: boolean) => void;
};
