import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Calculator",
  description: "Interactive math calculator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
