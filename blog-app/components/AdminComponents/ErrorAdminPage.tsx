import React from 'react'
import Image from "next/image";

const ErrorPage = ({text}: {text: string}) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-10">
        <div className="flex flex-col gap-10">
          <div className="w-[600px] h-[600px]">
            <Image
              src={"/error3.png"}
              width={600}
              height={600}
              alt="Error page"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center text-2xl font-bold tracking-widest text-white">{text}</h1>
        </div>
      </div>
  )
}

export default ErrorPage
