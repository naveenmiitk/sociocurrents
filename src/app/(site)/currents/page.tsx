import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { groq } from 'next-sanity';
import ColumnPostList from '@/components/PostList/ColumnPostList';
import SelectorComponent from '@/components/SocioCurrent/Selector';
import { Metadata } from 'next';
import PaginationComponent from '@/components/SocioCurrent/PaginationComponent';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'SocioCurrent Affairs | Sociology Optional UPSC',
  description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
}

export const revalidate = 120;

const CurrentsHomePaage = async () => {

    redirect('/currents/1');
    const query = groq`
    *[_type =='post' && $type in subCategories[]->title]{
      ..., 
    }| order(_createdAt desc)[0...10]
    `

    const posts = await client.fetch(query,{type : 'Current Affairs'});

  return (
    <div className='max-w-7xl mx-4 lg:mx-auto border-t-[0px] border-neutral-300'>

    {/* <SelectorComponent/> */}
    {/* <PaginationComponent /> */}
    <div className='my-20 mt-50 md:mt-20 border-red-500 border-0'>
    {/* <ColumnPostList posts={posts}/> */}
    
    </div>  
    </div>
    
  )
}

export default CurrentsHomePaage