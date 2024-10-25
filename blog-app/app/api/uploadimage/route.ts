import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import formidable from 'formidable';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export async function POST(request: NextRequest) {
    
  //const form = new formidable.IncomingForm();

  const data = await request.formData();

  const imageId = data.get("imageId") as string;
  const image = data.get("image") as File;

  try {
    const bytes: any = await image?.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            public_id: imageId,
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({imageId: imageId});

  } catch (error) {
    return new NextResponse("Something went wrong!", {status: 400});

  }
}
