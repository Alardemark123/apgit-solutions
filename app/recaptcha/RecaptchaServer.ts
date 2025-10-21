"use client";

const verifyCaptcha = async (token: string | null): Promise<void> => {
  const res = await fetch("/api/verifyCaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  const data = await res.json();
  if (!data.success) {
    throw new Error("Captcha verification failed");
  }
};

export default verifyCaptcha;
