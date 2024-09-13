import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fira = Fira_Code({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={fira.className}>
        <div className="w-full h-20 bg-[#0e0e10] text-white px-10 flex justify-between items-center border-b-[1px] border-b-white">
          <Link href={"/"}>NorthBlogs</Link>
        </div>
        {children}
      </body>
    </html>
  );
}