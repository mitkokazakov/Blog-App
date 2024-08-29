export default async function FetchImages(){
    // "use server"

    const allImgs = await fetch(
        `https://api.cloudinary.com/v1_1/ddvfwyoek/resources/image`,
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
    
      const response = allImgs.json();

      return response;
}