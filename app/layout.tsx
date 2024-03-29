// app/layout.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Space_Grotesk as spaceGroteskFont } from "next/font/google";
import Footer from "@/components/Footer";
import { Box, VStack } from "@chakra-ui/react";

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
        minW={"360px"}
        maxW={"1440px"}
        mx={"auto"}
        overflowX={"hidden"}
        scrollBehavior={"smooth"}
      >
        <Providers>
          <VStack justifyContent={"space-between"} minH={"100vh"}>
            <VStack>
              <Navbar />
              <Box as={"main"}>{children}</Box>
            </VStack>
            <Footer />
          </VStack>
        </Providers>
      </Box>
    </html>
  );
}
