import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    userId: string
}


export async function DELETE(req: NextRequest, {params}: {params: UpdateParams}){

    const userId = params.userId;

   
    const currentUser = await prisma.user.update({
        data: {
            isDeleted: true
        },
        where: {
            id: userId
        }
    });

    // const currentUser = await prisma.user.delete({
    //     where: {
    //         id: userId
    //     }
    // });

    revalidatePath("/dashboard/users");

    return NextResponse.json({message: "User has been deleted successfully!"})

}