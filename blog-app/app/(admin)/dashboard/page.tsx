import DasboardMiddleColumn from "@/components/AdminComponents/DasboardMiddleColumn";
import DashboardContent from "@/components/AdminComponents/DashboardContent";
import DashboardRightColumn from "@/components/AdminComponents/DashboardRightColumn";
import Link from "next/link";
import React from "react";

type SearchParamsType = {
  searchParams: {
    tab: string;
    id: string;
  };
};

const page = ({ searchParams }: SearchParamsType) => {
  return (
    <div className="w-[300px] min-h-screen bg-black text-white">
      {/* <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <Link href={"/dashboard?tab=users"}>Users</Link>
      </div> */}

      <DashboardContent />
      {/* <DasboardMiddleColumn tabInfo={searchParams?.tab} />
      <DashboardRightColumn tabInfo={searchParams?.tab} idInfo={searchParams?.id}/> */}
    </div>
  );
};

export default page;
