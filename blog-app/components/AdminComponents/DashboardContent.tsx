import Link from "next/link";
import React from "react";

const DashboardContent = () => {

  // w-[400px] min-h-screen border-r-[1px] text-white border-r-white flex flex-col gap-3 py-5 px-2

  return (
    <div className="w-full h-24 border-b-[1px] text-white  border-b-white flex lg:flex-col lg:min-h-screen lg:h-full lg:w-1/4 xl:w-1/5 xl:max-w-1/5 lg:border-b-0  gap-3 py-5 px-2">
      <Link
        href={"/dashboard/users"}
        className="px-5 py-3 hover:bg-[#21334c] font-bold tracking-widest focus:bg-[#21334c]"
      >
        Users
      </Link>
      <Link
        href={"/dashboard/posts"}
        className="px-5 py-3 hover:bg-[#21334c] font-bold tracking-widest focus:bg-[#21334c]"
      >
        Blogs
      </Link>
    </div>
  );
};

export default DashboardContent;
