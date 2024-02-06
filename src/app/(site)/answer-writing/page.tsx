import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Link from 'next/link';
import { Post } from '@/lib/type/type';
import { cn } from '@/lib/utils';
import { poppins } from '../layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Answer Writing | Sociology Optional UPSC',
  description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
}

const query = groq`
*[_type =='answerWriting']{
  ...,
}| order(_createdAt desc)[0...10]
`

export const revalidate = 30;

const AnswerWritingPage = async () => {
    const allposts : Post[]= await client.fetch(query);
  return (
    <div>
      <div className='bg-neutral-50 min-h-[150px] flex items-center justify-center mb-10 '>
        <div className='-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white'>
        <h1 className={cn('text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold py-4 md:py-6 skew-x-[20deg]',poppins.className )}>Sociology Answer Writing </h1>
        </div>
       {/* <h1 className='text-2xl md:text-3xl text-center text-white bg-black font-semibold'>Answer Writing Practice & Readouts</h1> */}
      
      </div>

      <div className='h-[80vh] w-[80vw] mx-auto space-y-2'>
       {allposts.map((post)=>(
        <div key={post._id}>
            <Link href={`/answer-writing/${post.slug.current}`}> <h1 className='hover:text-red-600 text-lg'>{post.title}</h1></Link>
        </div>
       ))}
    </div>

    </div>
    
  )
}

export default AnswerWritingPage


// { _id: React.Key | null | undefined; slug: { current: any; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | Iterable<React.ReactNode> | null | undefined; }