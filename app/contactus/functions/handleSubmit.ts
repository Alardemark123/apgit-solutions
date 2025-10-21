import { HandleSubmit } from "./contactus.type";
import { fieldValidity } from "./contactus.type";
import { validationMessage } from "./contactus.type";
import { requiredFields } from "./contactus.type";
import { splitFieldName, validateComment } from "./formValidation";
import { validateName } from "./formValidation";
import { validateCompanyName } from "./formValidation";

const handleSubmit = async ({
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
}: HandleSubmit) => {
  // focus on each field where it is empty
  let hasFocused = false;
  for (const field of requiredFields) {
    if (state[field]) {
      fieldValidity[field] = true;
      validationMessage[field] = "";
      continue;
    }

    if (!hasFocused) {
      refs[field]?.current?.focus();
      hasFocused = true;
    }

    fieldValidity[field] = false;
    validationMessage[field] = `${splitFieldName(field)} cannot be empty`;
  }
  setFieldValidity(fieldValidity);
  setValidationMessage(validationMessage);

  if (hasFocused) {
    return;
  }

  // checks if it is a valid email
  const emailRegex =
    /^(?=.{1,64}@)(?!.*\.\.)[a-zA-Z0-9](\.?[a-zA-Z0-9_+-])*@[^\s@.][^\s@]*[^\s@.]$/;

  if (state.email && !emailRegex.test(state.email)) {
    refs.email?.current?.focus();
    setFieldValidity((prev) => ({
      ...prev,
      email: false,
    }));
    setValidationMessage((prev) => ({
      ...prev,
      email: "Please enter a valid email address.",
    }));
    return;
  }

  // captcha verification
  if (!state.isVerified) {
    setValidationMessage((prev) => ({
      ...prev,
      isVerified: "Answer Captcha First",
    }));
    return;
  }

  // field validation such as the length, allowed symbols
  const validations = [
    validateName("firstName", state.firstName, {
      setFieldValidity,
      setValidationMessage,
    }),
    validateName("lastName", state.lastName, {
      setFieldValidity,
      setValidationMessage,
    }),
    validateCompanyName("companyName", state.companyName, {
      setFieldValidity,
      setValidationMessage,
    }),
    validateComment("comments", state.comments, {
      setFieldValidity,
      setValidationMessage,
    }),
  ];

  const allValid = validations.every(Boolean);
  if (!allValid) return;

  const payload = JSON.stringify(state);
  try {
    setIsLoading?.(true);
    const [emailApi, databaseApi] = await Promise.all([
      fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }),
      fetch("/api/database", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }),
    ]);

    if (emailApi.status === 429 && databaseApi.status === 429) {
      setRateLimited(true);
      resetForm();
      recaptchaRef.current?.reset();
      return;
    }

    const isServerError = emailApi.status === 500 || databaseApi.status === 500;

    if (isServerError) {
      setInternalError(true);
      resetForm();
      recaptchaRef.current?.reset();
      return;
    }

    if (!emailApi.ok || !databaseApi.ok) {
      return;
    }

    setModalOpen(true);
    resetForm();
    recaptchaRef.current?.reset();
  } catch (error) {
    if (error) {
      setInternalError(true);
      resetForm();
      recaptchaRef.current?.reset();
      return;
    }
  } finally {
    setIsLoading?.(false);
  }
};

export default handleSubmit;
