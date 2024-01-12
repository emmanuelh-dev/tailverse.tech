/* eslint-disable @next/next/inline-script-id */
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import { ModeToggle } from "@/components/Theme/Toggle";
import Header from "@/components/Header/Header";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Script from "next/script";
import Footer from "@/components/Footer";
import { Figtree } from "next/font/google";
export const metadata: Metadata = {
  title:
    "Tailverse: Tailwind CSS, Alpinejs components, shaping the future of design effortlessly",
  description:
    "Tailverse: Tailwind CSS, Alpinejs components, shaping the future of design effortlessly",
};
const font = Figtree({ subsets: ["latin"], weight: ["300", "400", "500"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-black`}>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-5D2017M1TM"`}
            />

            <Script>
              {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());

               gtag('config', 'G-5D2017M1TM');
              `}
            </Script>

            <Script src="https://cdn.tailwindcss.com" />
            <Script src="https://unpkg.com/alpinejs" />
            <Header />
            {children}
            <Footer />
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
