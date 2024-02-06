import { Metadata } from 'next'
import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { notFound } from 'next/navigation';
import PaginationComponent from '@/components/SocioCurrent/PaginationComponent';
import ColumnPostList from '@/components/PostList/ColumnPostList';
import { Post } from '@/lib/type/type';
import Selector2 from '@/components/SocioCurrent/Selector2';

export const metadata: Metadata = {
  title: 'SocioCurrent Affairs | Sociology Optional UPSC',
  description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
}

export const revalidate = 120;

export async function generateStaticParams() {
  const query  = groq`
        *[_type =='post' && $type in subCategories[]->title 
        ]{
          ..., 
        }| order(_createdAt desc)[0...5]
        `
  const posts = await client.fetch(query,{type : 'Current Affairs'}).then((res) => res.json())
 
  return posts.map((post:Post) => ({
    slug: post.slug,
  }))
}


const SocioCurrentsHomePage = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string,
    page?: string,
  },
}) => {

  const filter = searchParams?.filter || 'default';
  
  if(!['default', 'paper1', 'paper2'].includes(filter)){
    return notFound();
  }


  if(!filter)
  return notFound();

  const internalFilter = new Map<string, string>([
    ["default", "Current Affairs"], 
    ["paper1", "Paper 1"], 
    ["paper2", "Paper 2"],
  ]); 


  const currentPage = Number(searchParams?.page) || 1;

  // console.log(currentPage);
  if(!(typeof currentPage === 'number' && currentPage === currentPage)){
    return notFound();
  }

  if(Number(currentPage) < 0){
    return notFound();
  }

  let posts:Post[] | [] = [];
  const queryCountTotalPost = groq`
  count(*[_type =='post' && $type in subCategories[]->title && $filter in subCategories[]->title]{
    ..., 
  }| order(_createdAt desc))
  `;

  const totalPost = (await client.fetch(queryCountTotalPost, {type : 'Current Affairs' , filter : internalFilter.get(filter)}));
  const postPerPage:number = 5;
  const totalPages:number = Math.ceil(Number(totalPost)/postPerPage);

  if(Number(currentPage) > totalPages) {
    return notFound();
  }
  

  const query  = groq`
        *[_type =='post' && $type in subCategories[]->title && $filter in subCategories[]->title
        ]{
          ..., 
        }| order(_createdAt desc)[0...5]
        `

  posts = await client.fetch(query,{type : 'Current Affairs', filter : internalFilter.get(filter)});
  const lastCreatedAtInit = posts[posts.length -1]._createdAt;

  async function fetchNextPage(){
    const queryLastPostLastPage =  groq`
    *[_type =='post' && $type in subCategories[]->title && $filter in subCategories[]->title

    ]{
      _id, 
      _createdAt, 
      title, 
    } | order(_createdAt desc)[$num]
    `;

    const postLast = await client.fetch(queryLastPostLastPage, {type : 'Current Affairs', filter : internalFilter.get(filter),  num : (currentPage-1)*postPerPage -1 });
    const postLastCreatedAt = postLast._createdAt;


    let lastCreatedAt:string|null = postLastCreatedAt || lastCreatedAtInit;
    if(lastCreatedAt === null) {
      return []
    }
    const query  = groq`
      *[_type =='post' && $type in subCategories[]->title && $filter in subCategories[]->title
      && _createdAt < $lastCreatedAt
      ]{
        ..., 
      }| order(_createdAt desc)[0...5]
      `
     posts = await client.fetch(query, {type : 'Current Affairs', filter : internalFilter.get(filter), lastCreatedAt : lastCreatedAt});

    if(posts.length > 0 ){
      lastCreatedAt = posts[posts.length -1]._createdAt;
      // console.log('lastCreatedAt : ',lastCreatedAt);
    } else {
      lastCreatedAt = null;
     
    }
    return posts;
  }
  
  if(currentPage>1 && currentPage <=totalPages){
    posts = await fetchNextPage();
  }

  return (
    <div className='max-w-[1400px] mx-0 lg:mx-auto mt-10 min-h-[100vh]'>
      <div className='lg:ml-10'>
        <h1 className='text-center text-lg md:text-xl'>Sort By : {internalFilter.get(filter)}</h1>
        <Selector2 filter={internalFilter.get(filter)}/>
        <div className=''>
        <ColumnPostList posts={posts}/>
        </div> 
      </div>
      <PaginationComponent currentPage={Number(currentPage)} totalPages={totalPages} filter={filter}/>
    </div>
    
  )
}

export default SocioCurrentsHomePage