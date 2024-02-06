"use client";

import { groq } from 'next-sanity';
import React, { useEffect, useRef, useState } from 'react'
import ColumnPostList from '@/components/PostList/ColumnPostList';
import SelectFilter from '@/components/Selector/SelectFilter';
import { Post } from '@/lib/type/type';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';
import { client } from '../../../sanity/lib/client';
import { poppins } from '@/app/(site)/layout';


export const revalidate = 120;

const SocioCurrentComponent = () => {
    const [filterValue, setFilterValue] = useState<String>('newest');
    const [posts, setPosts] = useState<Post[] | null>(null);

    const filtertype = (filterValue : String) => {
      switch(filterValue) {
        default : 
        return groq`
        *[_type =='post' && $type in subCategories[]->title]{
          ..., 
        }| order(_createdAt desc)[0...10]
        `
        case 'newest' : 
        return groq`
        *[_type =='post' && $type in subCategories[]->title]{
          ..., 
        }| order(_createdAt desc)[0...10]
        `

        case 'oldest' : 
        return groq`
        *[_type =='post' && $type in subCategories[]->title]{
          ..., 
        }| order(_createdAt asc)[0...10]
        `

        case 'paper1' : 
        return groq`
        *[_type == 'post' && 'Paper 1' in subCategories[]->title]{
          ...,
        } | order(_createdAt desc)[0...10]
        `
        case 'paper2' : 
        return groq`
        *[_type == 'post' && 'Paper 2' in subCategories[]->title]{
          ...,
        } | order(_createdAt desc)[0...10]
        `
      
      }


   
    }

    const[query, setQuery] = useState(filtertype('newest'));

    useEffect(()=>{
      const fetchData = async ()=> {
        const posts = await client.fetch(query,{type : 'Current Affairs'});
        setPosts(posts);
        // console.log(posts);
      }
      
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    useEffect(()=>{
      const fetchData = async ()=> {
        const posts = await client.fetch(query,{type : 'Current Affairs'});
        setPosts(posts);
        // console.log(posts);
      }
      
      fetchData();
    },[filterValue, query])

    // const ref = useRef<HTMLDivElement>(null);

  return (
    <div className=''>
    <div className='-skew-x-[20deg] border-[2px] border-neutral-400 flex items-center justify-center p-4 max-w-lg mx-10 lg:mx-auto bg-black'>
          <h1 className={cn('text-xl md:text-2xl lg:text-3xl text-center font-semibold skew-x-[20deg] text-white', poppins.className)}>SocioCurrent Affairs</h1>
      </div>
    <div className='max-w-7xl mx-4 lg:mx-auto border-t-[2px] border-neutral-300 pt-10 mt-10'>
      <div className='mx-10 md:mx-5 mb-20 border-0 border-red-500 flex items-center justify-end lg:max-w-[20%] lg:mx-auto'>
  <Select onValueChange={(value)=>{setFilterValue(value); setQuery(filtertype(value))}}>
<SelectTrigger className="w-[180px]">
  <SelectValue placeholder="Sort By" />
</SelectTrigger>
<SelectContent ref={(ref) => {
  if (!ref) return;
  ref.ontouchstart = (e) => {
    e.preventDefault();
  };
}}>
  <SelectItem value="newest">Newest</SelectItem>
  {/* <SelectItem value="oldest">Oldest</SelectItem> */}
  <SelectItem value="paper1">Paper 1</SelectItem>
  <SelectItem value="paper2">Paper 2</SelectItem>
  {/* <SelectItem value="system">System</SelectItem> */}
</SelectContent>
  </Select>
  </div>

  <div className='my-20 mt-50 md:mt-20 border-red-500 border-0'>
  <ColumnPostList posts={posts}/>
  
  </div>
     
  </div>

  </div>
  )
}

export default SocioCurrentComponent