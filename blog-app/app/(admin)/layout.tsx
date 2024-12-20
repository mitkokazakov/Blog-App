import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBarAuthPanel from "@/components/NavBarAuthPanel";
import AdminAuthPanel from "@/components/AdminComponents/AdminAuthPanel";
import { Toaster } from "react-hot-toast";
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
    <html lang="en">
      <body className="font-froala min-h-screen">
        <AuthContext>
          <div className="w-full h-20 bg-[#0e0e10] text-white px-10 flex justify-between items-center border-b-[1px] border-b-white relative">
            <Link href={"/blogs"}>NorthBlogs</Link>
            <AdminAuthPanel />
          </div>
          {children}

          <Toaster position="top-right" />
        </AuthContext>
      </body>
    </html>
  );
}
