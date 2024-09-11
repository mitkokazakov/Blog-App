import Link from "next/link";
import React from "react";

type SearchParamsType = {
  searchParams: {
    tab: string;
  };
};

const page = ({ searchParams }: SearchParamsType) => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <Link href={"/dashboard?tab=users"}>Users</Link>
      </div>

      <p >Mitko</p>
      <p >{searchParams.tab}</p>
    </div>
  );
};

export default page;
