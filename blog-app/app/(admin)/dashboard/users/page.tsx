
import React from "react";
import "../../globals.css";
import { GetAllUsers } from "@/app/lib/services";
import UsersTable from "@/components/AdminComponents/UsersTable";

//import image1 from '../../../../images/user.png';

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = async ({ searchParams }: UsersFilterParams) => {
  

  const users = await GetAllUsers();

  return (
    <div className="w-full bg-[#0f0f11] min-h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Users</h1>
      </div>

      <UsersTable users={users} />
      
    </div>
  );
};

export default page;
