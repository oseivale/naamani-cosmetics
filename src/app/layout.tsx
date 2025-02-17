"use client";
import { Catamaran, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { CartProvider } from "./contexts/cart";

const nunito = Catamaran({
  subsets: ["latin"], // Specify subsets
  weight: ["300", "400", "700"], // Choose specific weights (optional)
  variable: "--font-nunito", // Custom CSS variable (optional)
});

const eb_garamond = Crimson_Text({
  subsets: ["latin"], // Specify subsets
  weight: ["400"], // Choose specific weights (optional)
  variable: "--font-eb-garamond", // Custom CSS variable (optional)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eb_garamond.variable} ${nunito.variable}`}>
        <CartProvider>
          <Navigation />
          <main style={{ minHeight: "80vh", paddingTop: "5rem" }}>
          <Toaster position="top-right" reverseOrder={false} />
            {children}
          </main>
        </CartProvider>

        <Footer />
      </body>
    </html>
  );
}
