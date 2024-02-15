// app/layout.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Space_Grotesk as spaceGroteskFont } from "next/font/google";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

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
      <Box
        as={"body"}
        maxW={"1440px"}
        mx={"auto"}
        overflowX={"hidden"}
        scrollBehavior={'smooth'}
      >
        <Providers>
          <Navbar />
          <Box as={"main"}>{children}</Box>
          <Footer />
        </Providers>
      </Box>
    </html>
  );
}
