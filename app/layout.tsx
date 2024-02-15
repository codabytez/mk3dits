// app/layout.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Space_Grotesk as spaceGroteskFont } from "next/font/google";
import Footer from "@/components/Footer";

const spaceGrotesk = spaceGroteskFont({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "mk3dits",
  description: "mk3dits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={spaceGrotesk.variable} lang="en">
      <body
        style={{
          maxWidth: "1440px",
          margin: "auto",
          overflowX: "hidden",
        }}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
