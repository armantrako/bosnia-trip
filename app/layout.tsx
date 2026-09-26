import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Bosnia Trip — Discover Bosnia. One trip at a time.",
  description:
    "Explore cities, nature, and hidden gems across Bosnia and Herzegovina. Plan trips, track visited places, and build your Bosnia travel passport.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased pb-16 md:pb-0">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
