import type { Metadata } from "next";
import "./globals.css";
import { ConditionalNavbar } from "@/components/conditional-navbar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Windows 95 Shadcn UI",
  description: "A collection of Windows 95 styled components built with Radix UI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Suspense fallback={null}>
          <ConditionalNavbar />
        </Suspense>
      </body>
    </html>
  );
}
