import Link from "next/link";
import NavBarAuthPanel from "./NavBarAuthPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  const currentuserId = session?.user.id as string;

  const sessionStatus: boolean = session != null ? true : false;

  const currentUserRole = session?.user.role;

  return (
    <div className="relative w-full h-20 bg-[#ffffd7] border-b-[1px] border-b-black flex justify-between items-center px-5 lg:px-20">
      <div>
        <Link href={"/"} className=" tracking-widest font-bold text-lg">
          NorthBlogs
        </Link>
      </div>

      <NavBarAuthPanel sessionStatus={sessionStatus} userId={currentuserId} userRole={currentUserRole as string}/>
    </div>
  );
};

export default Navbar;
