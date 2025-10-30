import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../app/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../app/fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
});

export const metadata = {
  title: "DevChat",
  description: "DevChat a chat application made by Dev",
};

export default function RootLayout({ children }) {
  // Clerk expects a frontendApi value (project identifier). Prefer the
  // NEXT_PUBLIC_ variant for client usage; fall back to CLERK_FRONTEND_API
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API || process.env.CLERK_FRONTEND_API;

  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
