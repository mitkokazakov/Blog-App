import Link from "next/link";
import NavBarAuthPanel from "./NavBarAuthPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  const sessionStatus: boolean = session != null ? true : false;

  return (
    <div className="relative w-full h-20 bg-[#ffffd7] border-b-[1px] border-b-black flex justify-between items-center px-5 lg:px-20">
      <div>
        <Link href={"/"} className=" tracking-widest font-bold text-lg">
          NorthBlogs
        </Link>
      </div>

      <NavBarAuthPanel sessionStatus={sessionStatus} />
    </div>
  );
};

export default Navbar;
