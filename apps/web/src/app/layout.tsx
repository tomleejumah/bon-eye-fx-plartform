import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceFX | Trade With Clarity",
  description:
    "Build your trading edge with practical forex education, mentorship and a focused trading community.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
