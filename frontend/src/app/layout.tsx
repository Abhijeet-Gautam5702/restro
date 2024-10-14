import type { Metadata } from "next";
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Restro - Dine-In & Food Delivery",
  description: "A restaurant aggregator and food delivery platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
