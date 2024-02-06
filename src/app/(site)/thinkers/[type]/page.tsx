import { Type } from 'lucide-react';
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../../sanity/lib/client';
import { hrefToReadable, readableToHref } from '@/lib/utils';
import PostList from '@/components/PostList/PostList';
import { thinkersList } from '@/lib/type/staticData';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        type: string;
    };
} 

export const revalidate = 120;

export async function generateMetadata ({ params: { type } }: Props) {
  const str = hrefToReadable(type);
  return {
    title : str, 
  }

}



const IndividualThinkerPage = async ({params : {type}}: Props) => {

    const checkArray:string[] = [];

    thinkersList.map((item)=>(
      checkArray.push(readableToHref(item.name)!)
    ))
    if(!checkArray.includes(type)){
      notFound();
    }

    // console.log('type: ', type);
    const str = hrefToReadable(type);
    // console.log('Readable :',str);

    const query = groq`
      *[_type =='post' && $type in subCategories[]->title]{
        ..., 
        author->, 
        categories[]->
      }| order(_createdAt desc)[0...10]
      `

    const posts = await client.fetch(query,{type : str});
  return (
    // max-w-7xl mx-auto
    <div className='w-[100vw] sm:w-[98vw] sm:mx-auto lg:w-[80vw] mx-0 lg:mx-auto'>
         <div className='mb-10 border-b-[2px] mx-10'>
            <h1 className='text-3xl font-bold mb-5'>Thinker : {str}</h1>
        </div>
        <PostList posts={posts} />
    </div>
  )
}

export default IndividualThinkerPage


