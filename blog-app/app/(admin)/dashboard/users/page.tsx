
import React from "react";
import "../../globals.css";
import { GetAllUsers } from "@/app/lib/services";
import UsersTable from "@/components/AdminComponents/UsersTable";
import { revalidatePath } from "next/cache";
import { useParams } from "next/navigation";

//import image1 from '../../../../images/user.png';

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = async ({ searchParams }: UsersFilterParams) => {
  
  // revalidatePath("/dashboard/users");
  // const users = await GetAllUsers();

  const response = await fetch( "http://localhost:3000/api/allusers",{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    },
    cache: "no-store",
    next:{
      tags: ["users"],
      revalidate: 0
    }
  })

  const data = await response.json();

  const users: UserParams[] = [];

  data.users.map((user: UserParams) => {
    const currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      isDeleted: user.isDeleted,
      createdAt: new Date(user.createdAt),
      role: user.role
    }

    users.push(currentUser);
  })
  
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
