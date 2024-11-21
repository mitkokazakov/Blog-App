import React from "react";
import Image from "next/image";
import ChangeUserForm from "@/components/ChangeUserForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";
import { GetUser } from "@/app/lib/services";
import ErrorPage from "@/components/ErrorPage";

type ProfileParams = {
  params: {
    userId: string;
  };
};

const page = async ({ params }: ProfileParams) => {

  const session = await getServerSession(authOptions);

  const user = await GetUser(params.userId);

  if(session?.user.id != params.userId && session?.user.role != "ADMIN"){
    return <ErrorPage text={"You don't have permission to change this user profile! Sorry."}/>
  }

  if(!user){
    return <ErrorPage text={"User with that id does not exist! Sorry."}/>
  }

  return (
    <div className="w-full min-h-screen p-5 lg:max-w-[1440px] md:mx-auto">
      <h1 className="text-2xl font-bold tracking-widest text-center">
        My Profile
      </h1>

      <div className="flex flex-col justify-center items-start md:flex-row md:gap-[100px] mt-10 md:mt-20">
        <div className="flex flex-col gap-10 items-center w-full lg:min-w-[400px]">
          <h1 className="font-bold tracking-widest text-lg">User Details</h1>

          <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
            {user?.image == null ? (
              <Image
                src={"/admindesktop.png"}
                width={300}
                height={300}
                alt="User image"
                className="w-full h-full"
                priority
              />
            ) : null}

            {user?.image != null ? (
              <Image
                src={user?.image as string}
                width={300}
                height={300}
                alt="User image"
                className="w-full h-full"
                priority
              />
            ) : null}
          </div>

          <p className="text-lg">
            Full Name:{" "}
            <span className="font-semibold text-base">{user?.name}</span>
          </p>

          <p className="text-lg">
            Email:{" "}
            <span className="font-semibold text-base">{user?.email}</span>
          </p>

          <p className="text-lg">
            Role: <span className="font-semibold text-base">{user?.role}</span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-full mt-20 md:mt-0">
          <ChangeUserForm color="black" name={user?.name as string} email={user?.email as string} userId={user?.id as string}/>
        </div>
      </div>
    </div>
  );
};

export default page;
