import Link from "next/link";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import { GetAllUsers } from "@/app/lib/services";
import UserRow from "@/components/AdminComponents/UserRow";
import UsersTable from "@/components/AdminComponents/UsersTable";

//import image1 from '../../../../images/user.png';

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = async ({ searchParams }: UsersFilterParams) => {
  // const data: number[] = [1, 2, 3, 4, 20, 34, 45, 55];

  // console.log(searchParams.tab);

  // let filteredData: number[] = data;

  // if (searchParams.tab == "below") {
  //   filteredData = data.filter((num) => num < 18);
  // }

  // if (searchParams.tab == "above") {
  //   filteredData = data.filter((num) => num > 18);
  // }
  // if (searchParams.tab == "all") {
  //   filteredData = data;
  // }

  const users = await GetAllUsers();

  return (
    <div className="w-full bg-[#0f0f11] h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Users</h1>
      </div>

      <UsersTable users={users} />
      
    </div>
  );
};

export default page;
