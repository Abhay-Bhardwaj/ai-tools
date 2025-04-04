import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI tools",
  description: "Free AI tools for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <main>{children}</main>
        <Toaster /> 
        </body>
        
      </html>
    </ClerkProvider>
  );
}
