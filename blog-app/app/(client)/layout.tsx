import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
// import sdsa from '../../node_modules/froala-editor/css/plugins/froala_style.min.css'
const fira = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        </AuthContext>
      </body>
    </html>
  );
}
