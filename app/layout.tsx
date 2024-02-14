// app/layout.tsx
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en" className={spaceGrotesk.variable}>
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
