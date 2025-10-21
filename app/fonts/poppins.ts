import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "./poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-Bold.woff2", // Optional
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
});

export default poppins;
