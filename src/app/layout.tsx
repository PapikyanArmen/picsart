import "./globals.scss";

import React from "react";
import AnimatedCursor from "@/app/components/AnimatedCursor/AnimatedCursor";
import Header from "@/app/components/Header/Header";
import Template from "@/app/components/PageTransition/PageTransition";
import { Providers } from "@/app/store/provider";
import { ThemeProvider } from "@/app/theme-provider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  title: "PICSART",
  description: "Picsart Task",
  openGraph: {
    title: "PICSART",
    description: "PICSART Description",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedCursor />
          <Providers>
            <Header />
            <Template>{children}</Template>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
