import DashboardContent from "@/components/AdminComponents/DashboardContent";
import React from "react";
import { Fira_Code } from "next/font/google";
import AuthContext from "@/context/AuthContext";

const fira = Fira_Code({ subsets: ["cyrillic"] });

const layout = ({
  children,
  list,
  modal,
}: {
  children: React.ReactNode;
  list: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <AuthContext>
      <div className={`w-full min-h-screen bg-[#0e0e10] flex font-froala`}>
        <DashboardContent />
        {children}
        {list}
        {modal}
      </div>
    </AuthContext>
  );
};

export default layout;
