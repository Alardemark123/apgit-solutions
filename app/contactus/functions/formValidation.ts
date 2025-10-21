import { MessageField } from "./contactus.type";
import { ValidatableField } from "./contactus.type";

type HandleSubmitType = {
  setFieldValidity: React.Dispatch<
    React.SetStateAction<Record<ValidatableField, boolean>>
  >;
  setValidationMessage: React.Dispatch<
    React.SetStateAction<Record<MessageField, string>>
  >;
};

export const splitFieldName = (input: string) => {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

const countSymbol = (value: string, symbol: string): number => {
  let spaceCount: number = 0;

  for (let index = 0; index < value.length; index++) {
    if (value[index] === symbol) {
      spaceCount++;
    }
  }

  return spaceCount;
};

export const validateCompanyName = (
  field: MessageField,
  value: string,
  { setFieldValidity, setValidationMessage }: HandleSubmitType
): boolean => {
  const trimmed = value.trim();
  const companyNameRegex = /^[\p{L}\p{N}\s&.,'’\-()]+$/u;

  const symbolLimits = {
    "&": 1,
    "'": 1,
    ".": 2,
    ",": 1,
    "-": 1,
    "(": 1,
    ")": 1,
  };

  for (const [symbol, maxAllowed] of Object.entries(symbolLimits)) {
    const count = countSymbol(value, symbol);
    if (count > maxAllowed) {
      setFieldValidity((prev) => ({ ...prev, [field]: false }));
      setValidationMessage((prev) => ({
        ...prev,
        [field]: `The number of '${symbol}' symbols exceeds the allowed limit of ${maxAllowed}.`,
      }));
      return false;
    }
  }

  const spaceCount = countSymbol(value, " ");
  if (spaceCount > 5) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Too many spaces — maximum 5 allowed.`,
    }));
    return false;
  }

  const openCount = countSymbol(value, "(");
  const closeCount = countSymbol(value, ")");

  if (openCount !== closeCount) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Parentheses must be used in matching pairs.`,
    }));
    return false;
  }

  if (trimmed && !companyNameRegex.test(trimmed)) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Please use only letters, numbers, spaces, and symbols such as &, ., ',', -, (, ). Maximum 50 characters.`,
    }));

    return false;
  }

  if (trimmed.length > 50) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Company Name is too long`,
    }));

    return false;
  }

  if (trimmed.length === 1) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Company Name is too short`,
    }));

    return false;
  }

  return true;
};

export const validateName = (
  field: MessageField,
  value: string,
  { setFieldValidity, setValidationMessage }: HandleSubmitType
): boolean => {
  const trimmed = value.trim();
  const nameRegex = /^[\p{L}\p{M}\s'-]+$/u;
  const maxSpaces = 2;
  const maxHyphens = 1;
  const maxApostrophes = 1;

  if (countSymbol(value, " ") >= maxSpaces) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Exceeded the number of allowed spaces`,
    }));

    return false;
  }

  if (countSymbol(value, "-") >= maxHyphens) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Exceeded the number of allowed hyphens`,
    }));

    return false;
  }

  if (countSymbol(value, "'") >= maxApostrophes) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Exceeded the number of allowed apostrophes`,
    }));

    return false;
  }

  if (trimmed && !nameRegex.test(trimmed)) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `Please use only letters (A–Z), spaces, apostrophes (’), or hyphens (-).`,
    }));

    return false;
  }

  if (trimmed.length === 1) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `${splitFieldName(field)} is too short`,
    }));

    return false;
  }

  if (trimmed.length > 50) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `${splitFieldName(field)} is too long`,
    }));

    return false;
  }
  return true;
};

const containsHTML = (value: string) => /<[^>]+>/.test(value);

export const validateComment = (
  field: MessageField,
  value: string,
  { setFieldValidity, setValidationMessage }: HandleSubmitType
): boolean => {
  const trimmedValue = value.trim();
  const valueLength: number = trimmedValue.length;

  if (!trimmedValue) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `${splitFieldName(field)} cannot be empty.`,
    }));

    return false;
  }

  if (containsHTML(value)) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `HTML or script tags are not allowed.`,
    }));

    return false;
  }

  if (valueLength > 280) {
    setFieldValidity((prev) => ({ ...prev, [field]: false }));
    setValidationMessage((prev) => ({
      ...prev,
      [field]: `${valueLength} is greater than the limit which is 280 characters`,
    }));

    return false;
  }

  return true;
};
