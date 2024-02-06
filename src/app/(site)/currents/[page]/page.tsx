import React from 'react'
import { client } from '../../../../../sanity/lib/client';
import { groq } from 'next-sanity';
import PaginationComponent from '@/components/SocioCurrent/PaginationComponent';
import { redirect } from 'next/dist/server/api-utils';
import { notFound } from 'next/navigation';
import SelectorComponent from '@/components/SocioCurrent/Selector';

type Props = {
    params: {
        page: string;
    };
} 

const PaginationDynamicHomePage = async ({params : {page}}: Props) => {
   
  const query1 = groq`
  count(*[_type =='post' && $type in subCategories[]->title]{
    ..., 
  }| order(_createdAt desc)[0...1])
  `;

  const totalPost = await client.fetch(query1, {type : 'Current Affairs'});
  const postPerPage:number = 1;
  const totalPages:number = Math.ceil(Number(totalPost)/postPerPage)+10;
  // console.log('total Pages: ', totalPages);

  if(!Number(page)){
    return notFound();
  }

  if(Number(page) > totalPages) {
    return notFound();
  }

   

  return (
    <div>
      <SelectorComponent currentPage={Number(page)}/>
    <PaginationComponent currentPage={Number(page)} totalPages={totalPages} filter={'default'}/>
    </div>
  )
}

export default PaginationDynamicHomePage