import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Structura — Automated YouTube Shorts for Online Coaches",
  description:
    "Structura generates 30 branded YouTube Shorts per month for online coaches — no editing, no content team.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
