"use client";

import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { notFound, useRouter } from 'next/navigation';

interface PaginationComponentProps {
  currentPage : number; 
  totalPages : number;
  filter : string;
}

const PaginationComponent:React.FC<PaginationComponentProps> = ({currentPage, totalPages, filter}) => {
  const router = useRouter();

  if(!['default', 'paper1', 'paper2'].includes(filter)){
    return notFound();
  }


  return (
    <div className='my-10 mx-4 border-0 border-red-500'>
    <Pagination className='flex flex-col md:flex-row justify-center items-center'>
  <PaginationContent>


    {
      totalPages>1 && <div className='flex border-0 border-red-500'>
   {currentPage !=1 && <> <PaginationItem>
      <PaginationPrevious onClick={()=>router.push(`/sociocurrents?filter=${filter}&page=${currentPage-1}`)}/>
    </PaginationItem></>}
    {Array.from(Array(totalPages).keys()).map((item, index)=>(
      <div key={index}>
      {item+1 == currentPage ? <>
        <PaginationItem>
      <PaginationLink  onClick={()=>router.push(`/sociocurrents?filter=${filter}&page=${item+1}`)} isActive>{item+1}</PaginationLink>
      </PaginationItem>
      </> : <>
      <PaginationItem>
      <PaginationLink  onClick={()=>router.push(`/sociocurrents?filter=${filter}&page=${item+1}`)}>{item+1}</PaginationLink>
      </PaginationItem>
      </>}
        </div>
    ))}
    
    {currentPage !=totalPages && <>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={()=>router.push(`/sociocurrents?filter=${filter}&page=${currentPage+1}`)}/>
    </PaginationItem></>}
      </div>
    }

  </PaginationContent>
  <div className='flex justify-center items-center min-w-[80px] border-0 border-red-500 my-2'>
  <p className="text-sm text-gray-500 ml-2 ">Page {currentPage} of {totalPages}</p>
  </div>
</Pagination>
    </div>
  )
}

export default PaginationComponent