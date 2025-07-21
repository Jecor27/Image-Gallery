import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const revalidate = 3600; // 1 hour

export const metadata: Metadata = {
  title: "img-gallery-next",
  description: "A simple image gallery built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NavBar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
