"use client";

import { groq } from 'next-sanity';
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Post } from '@/lib/type/type';
import { client } from '../../../sanity/lib/client';
import ColumnPostList from '../PostList/ColumnPostList';
import PaginationComponent from './PaginationComponent';

interface SelectorComponentProps {
  currentPage : number;
}

const SelectorComponent:React.FC<SelectorComponentProps> = ({currentPage}) => {
    const [filterValue, setFilterValue] = useState<String>('newest');
    const [posts, setPosts] = useState<Post[] | null>(null);
    const startPost = (currentPage-1)*1+1; //*10
    const endPost = (currentPage-1)*1+1;  //*10

    if(!posts) {
        const query  = groq`
        *[_type =='post' && $type in subCategories[]->title]{
          ..., 
        }| order(_createdAt desc)[0...1]
        `
        const fetchData =async () => {
            const posts = await client.fetch(query,{type : 'Current Affairs', statPost : startPost, endPost : endPost});
            setPosts(posts);
        }
        fetchData();
    }


    const filtertype = (filterValue : String) => {
        switch(filterValue) {
          default : 
          return groq`
          *[_type =='post' && $type in subCategories[]->title]{
            ..., 
          }| order(_createdAt desc)[0...1]
          `
          case 'newest' : 
          return groq`
          *[_type =='post' && $type in subCategories[]->title]{
            ..., 
          }| order(_createdAt desc)[0...1]
          `
  
          case 'oldest' : 
          return groq`
          *[_type =='post' && $type in subCategories[]->title]{
            ..., 
          }| order(_createdAt asc)[0...1]
          `
  
          case 'paper1' : 
          return groq`
          *[_type == 'post' && 'Paper 1' in subCategories[]->title]{
            ...,
          } | order(_createdAt desc)[0...1]
          `
          case 'paper2' : 
          return groq`
          *[_type == 'post' && 'Paper 2' in subCategories[]->title]{
            ...,
          } | order(_createdAt desc)[0...1]
          `
        
        }
    }

    const[query, setQuery] = useState(filtertype('newest'));

    useEffect(()=>{
        const fetchData = async ()=> {
          const posts = await client.fetch(query,{type : 'Current Affairs', statPost : startPost, endPost : endPost});
          setPosts(posts);
          // console.log(posts);
        }
        
        fetchData();
      },[filterValue, query, startPost , endPost])

    // console.log(posts);

  return (
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
    <SelectItem value="paper1">Paper 1</SelectItem>
    <SelectItem value="paper2">Paper 2</SelectItem>
    </SelectContent>
    </Select>
    </div>
    <div className='my-20 mt-50 md:mt-20 border-red-500 border-0'>
    <ColumnPostList posts={posts}/>
    </div>
    {/* <PaginationComponent/> */}
    </div>
  )
}

export default SelectorComponent