import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import AuthContext from "@/context/AuthContext";

const fira = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "North Blogs",
  description: "Inspired by Northern Lights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-froala">
        <AuthContext>
        {children}
        </AuthContext>
      </body>
    </html>
  );
}
