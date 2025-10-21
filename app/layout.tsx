// app/layout.tsx
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/AppBar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "APGIT",
  icons: {
    icon: "/APFav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ClientLayout>
            <ScrollProgressBar />
            <NavBar />
            {children}
            <Footer />
          </ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
