import React from 'react'
import Karl from '../../../public/karl.gif'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { anton, inter } from '@/app/(site)/layout';

const MovingKarl = () => {
  return (
    <div className="border-t- border-neutral-700 bg-gradient-to- from-yellow-50 via-slate-50 to-red-50 bg-white w-full lg:w-full lg:mx-auto">
      <div className="flex flex-col md:flex-row lg:w-[70vw] justify-between items-center mx-auto border-0 border-red-500">
        <div className="flex flex-col items-center justify-center border-0 border-red-500 pt-0">
          {/* <Image
            src={People3}
            alt="GS Ghuriye"
            width={200}
            height={200}
            className="border-0 border-green-500"
          /> */}
          <Image
            src={Karl}
            alt="karl"
            height={350}
            className="object-contain bg-transparent"
          />
          <div className="mt-0 border-0 border-red-500 flex flex-col items-center text-center p-2">
            <h1 className="text-xl font-semibold">Karl Marx</h1>
            <h1 className="text-xl font-semibold">
              Proud Chief of Indian Sociology
            </h1>
          </div>
        </div>

        <div className="flex max-w-[50%] sm:max-w-[40%] lg:max-w-[30%] mx-10 my-6 border-0 border-red-500 p-2">
          <h1
            className={cn(
              "text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-red-700 max-w-xl font-extrabold text-center",
             inter.className
            )}
          >
            Bringing Revolution in UPSC CSE Sociology Optional!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MovingKarl
