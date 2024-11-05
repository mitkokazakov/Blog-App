import React from "react";
import Image from "next/image";
import ChangeUserForm from "@/components/ChangeUserForm";

type ProfileParams = {
  params: {
    userId: string;
  };
};

const page = ({ params }: ProfileParams) => {
  return (
    <div className="w-full min-h-screen p-5">
      <h1 className="text-2xl font-bold tracking-widest text-center">
        My Profile - {params.userId}
      </h1>

      <div className="flex justify-center items-center gap-[100px] mt-10">
        <div className="flex flex-col gap-10 items-center lg:min-w-[400px]">
            <h1>User Details</h1>

            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image src={'/user.png'} width={300} height={300} alt="User image" className="w-full h-full"/>
            </div>

            <p>Full Name: Mitko Kazakov</p>

            <p>Email: mitko@abv.bg</p>

            <p>Role: USER</p>
        </div>

        <div className="flex flex-col">
            <ChangeUserForm  color="black"/>
        </div>
      </div>
    </div>
  );
};

export default page;
