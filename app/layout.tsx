import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/provider/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import {dark} from '@clerk/themes'
import { ClerkProvider } from "@clerk/nextjs"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ai PPT builder",
  description: "Build AI powered Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en"
    suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >

        <ThemeProvider
          attribute={'class'}
          defaultTheme="darK"
          enableSystem
          disableTransitionOnChange
        >
          
        {children}
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
    
  );
}
