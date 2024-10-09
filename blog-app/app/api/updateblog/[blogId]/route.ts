import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function PUT(req: NextApiRequest, res: NextResponse){

    //const {blogid} = req.query;

    return NextResponse.json({message: `Okayy lets see the id ${req}`})

}