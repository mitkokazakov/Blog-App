import React from 'react'
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-32">
        <div className="flex flex-col gap-10">
          <div className="w-[600px] h-[360px]">
            <Image
              src={"/error.png"}
              width={600}
              height={360}
              alt="Error page"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center text-2xl font-bold tracking-widest">Blog with that id does not exist. Sorry!</h1>
        </div>
      </div>
  )
}

export default ErrorPage
