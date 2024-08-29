import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
type ImageParams = {
  secure_url: string,
  public_id: string
};

export async function GET(req: NextApiRequest | any) {
  const sp = req.nextUrl.searchParams;
  const publicId = sp.get("publicId");

  const allImgs = await fetch(
    `https://api.cloudinary.com/v1_1/ddvfwyoek/resources/image?public_id=${publicId}`,
    {
      mode: "no-cors",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const response = await allImgs.json();

  const image = response.resources.filter((i: ImageParams) => i.public_id == publicId)[0]

  const url = image.secure_url;

  const result = {
    public_id: image.public_id,
    secure_url: image.secure_url
  };

  return NextResponse.json({result});
}
