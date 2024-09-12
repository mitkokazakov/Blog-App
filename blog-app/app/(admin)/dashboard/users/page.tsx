import Link from "next/link";
import React from "react";

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = ({ searchParams }: UsersFilterParams) => {
  const data: number[] = [1, 2, 3, 4, 20, 34, 45, 55];

  console.log(searchParams.tab);

  let filteredData: number[] = data;

  if (searchParams.tab == "below") {
    filteredData = data.filter((num) => num < 18);
  }

  if (searchParams.tab == "above") {
    filteredData = data.filter((num) => num > 18);
  }
  if (searchParams.tab == "all") {
    filteredData = data;
  }

  return (
    <div className="w-full bg-yellow-300 h-screen">
      <h1 className="mb-10">All Users</h1>

      <div className="flex gap-5">
        <Link href={"/dashboard/users?tab=above"}>Above 18</Link>
        <Link href={"/dashboard/users?tab=below"}>Below 18</Link>
        <Link href={"/dashboard/users?tab=all"}>All</Link>
      </div>

      <div className="flex mt-5 gap-7">
        {filteredData.map((num) => {
          return <p key={num}>{num}</p>;
        })}
      </div>
    </div>
  );
};

export default page;
