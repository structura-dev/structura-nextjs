import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Structura — Automated YouTube Shorts for Online Coaches",
  description:
    "Structura generates 30 branded YouTube Shorts per month for online coaches — no editing, no content team.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://js.stripe.com/v3/buy-button.js" />
      </body>
    </html>
  );
}
