import Image from 'next/image'
import React from 'react'
import People3 from '../../../public/People_3.png';
import { anton } from '@/app/(site)/layout';
import { cn } from '@/lib/utils';
import Karl from "../../../public/karl.gif";

const words1 = [
  {
    text: "The",
    className:
      "text-black text-xl font-normal sm:text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Power",
    className:
      "text-black text-xl text-red-500 font-semibold sm:text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Trio",
    className:
      "text-black text-xl font-normal sm:text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "of",
    className:
      "text-black text-xl font-normal  sm:text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Sociology...",
    className:
      "text-black text-xl font-normal sm:text-2xl md:text-3xl lg:text-5xl",
  },
];


const SubFooter = () => {
  return (
    <div className="border-t- border-neutral-700 bg-gradient-to- bg-transparent from-yellow-50 via-slate-50 to-red-50 w-full lg:w-full lg:mx-auto">
      <div className="flex flex-col md:flex-row lg:w-[70vw] justify-between items-center mx-auto border-0 border-red-500">
        <div className="flex max-w-[50%] sm:max-w-[40%] lg:max-w-[30%] mx-10 my-6 border-0 border-red-500 p-2">
          <h1
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-red-700 max-w-xl tracking-[0.1em] text-center",
              anton.className
            )}
          >
            Socio Currents Made in India With ❤️ & 🍻
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center border-0 border-red-500 pt-0">
          <Image
            src={People3}
            alt="GS Ghuriye"
            width={200}
            height={200}
            className="border-0 border-green-500"
          />
          {/* <Image
            src={Karl}
            alt="karl"
            height={200}
            className="object-contain bg-transparent"
          /> */}
          <div className="mt-0 border-0 border-red-500 flex flex-col items-center text-center p-2">
            <h1 className="text-xl font-semibold">G.S. Ghurye</h1>
            <h1 className="text-xl font-semibold">
              Proud Founder of Indian Sociology
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter