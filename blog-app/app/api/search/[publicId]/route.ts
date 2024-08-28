import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res: NextApiResponse){

    const {publicId} = req.query;

    return NextResponse.json({message: publicId})
}