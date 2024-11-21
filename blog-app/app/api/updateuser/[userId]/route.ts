import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


type UpdateParams = {
  userId: string;
};

export async function PUT(
  req: NextRequest,
  { params }: { params: UpdateParams }
) {
  const userId = params.userId;

  const data = await req.formData();

  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const newpassword = data.get("newpassword") as string;
  const imageUrl = data.get("imageUrl") as string;

  const currentuser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  const currentUserImage = currentuser?.image;

  //Check if the user is fill the password input
  if(newpassword != null && newpassword != ''){

    const hashedPassword = await bcrypt.hash(newpassword,10);

    const updateUser = await prisma.user.update({
        data: {
          name: name,
          email: email,
          image: imageUrl == null || imageUrl == '' ? currentUserImage : imageUrl,
          hashedPassword: hashedPassword
        },
        where: {
          id: userId,
        },
      });

      return NextResponse.json({ message: `The User has been updated successfully` });
  }

  const updateUser = await prisma.user.update({
    data: {
      name: name,
      email: email,
      image: imageUrl == null || imageUrl == '' ? currentUserImage : imageUrl,
    },
    where: {
      id: userId,
    },
  });

  return NextResponse.json({ message: `The User has been updated successfully` });
}
