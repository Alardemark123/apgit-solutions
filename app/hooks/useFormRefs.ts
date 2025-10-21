import { useRef } from "react";

type FieldName =
  | "firstName"
  | "lastName"
  | "companyName"
  | "email"
  | "comments";

export type FormRefs = {
  [K in FieldName]: K extends "comments"
    ? React.RefObject<HTMLLabelElement | null>
    : React.RefObject<HTMLInputElement | null>;
};

export const useFormRefs = (): FormRefs => {
  const refs: FormRefs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    companyName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    comments: useRef<HTMLLabelElement>(null),
  };

  return refs;
};
