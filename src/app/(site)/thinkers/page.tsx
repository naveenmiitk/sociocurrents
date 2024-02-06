import React from 'react'
import {thinkersList} from '../../../lib/type/staticData';
import Link from 'next/link';
import { cn, readableToHref } from '@/lib/utils';
import { poppins } from '../layout';
import { MoveRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sociological Thinkers | Sociology Optional UPSC',
    description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
}
  


const ThinkersCategoryHomePage = () => {
  return (
    <div className='min-h-[60vh]'>
        <div className='border-b-2 border-neutral-300 border-dotted pb-6 mx-10'>
            <div className='-skew-x-[20deg] border-[2px] border-neutral-400 flex items-center justify-center p-4 max-w-lg mx-auto bg-black'>
            <h1 className={cn('text-xl md:text-2xl lg:text-3xl text-center font-semibold skew-x-[20deg] text-white', poppins.className)}>Sociological Thinkers</h1>
            </div>
           
        </div>

        <div className='flex-col gap-10 ml-10 my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10'>
            {thinkersList.map((item)=> {
                const href = readableToHref(item.name);
            return (
                <div className='flex-wrap border-2 border-neutral-100 rounded-xl p-2 bg-neutral-100 hover:bg-yellow-400 hover:text-black hover:outline-1' key={item.id}>
                    <Link href={`/thinkers/${href}`}>
                    <div className='flex items-center'>
                    <MoveRight className='w-4 h-4'/> 
                    <h1 className='ml-2 text-xl hover:underline-offset-8 hover:text-black'>{item.name}</h1>
                    </div>
                    </Link>
                   
                </div>
   
            )
    })}
        </div>

    </div>
  )
}

export default ThinkersCategoryHomePage