import DashboardContent from "@/components/AdminComponents/DashboardContent";
import React from "react";

const layout = ({
  children,
  list,
  details
}: {
  children: React.ReactNode;
  list: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen bg-[#0e0e10] flex">
      <DashboardContent />
      {children}
      {list}
      {details}
    </div>
  );
};

export default layout;
