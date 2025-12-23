import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Optional: For default font; remove if not needed

const inter = Inter({ subsets: ["latin"] }); // Optional

export const metadata: Metadata = {
  title: "Custom Calculator",
  description: "A simple and interactive calculator built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> {/* Remove inter.className if not using the font */}
    </html>
  );
}
