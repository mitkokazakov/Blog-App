import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
// import sdsa from '../../node_modules/froala-editor/css/plugins/froala_style.min.css'
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
      <body className=" bg-[#ffffd7] font-froala">
        <AuthContext>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </AuthContext>
      </body>
    </html>
  );
}
