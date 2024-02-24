"use client";

import { Search, SearchIcon } from 'lucide-react'
import React, { ReactEventHandler, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { searchQueryResults } from './search';
import SearchResultComponent from './SearchResultComponent';
import { useDebouncedCallback } from 'use-debounce';
import { ScrollArea } from '../ui/scroll-area';


const SearchBar:React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [typingStart, setTypingStart] = useState(false);

  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([] as any[]);
  const path = usePathname();

  // const searchQuery = groq`
  //       *[_type in ["post"] 
  //       && (
  //       title match $queryString + '*' 
  //       || name match $queryString + '*')] 
  //       | order(publishedAt desc){
  //         title,
  //         name, 
  //         bio,
  //         body,
  //         'slug' : slug.current,
  //         description,
  //         'type': _type,
          
  //       }
  //   `;


  const handleApiCall = useDebouncedCallback(async (searchQuery :  string, searchString : string) => {
    // console.log('debounce value', searchString);
    const data = await client.fetch(searchQuery, {
      queryString: searchString,
      });
    // console.log(data);
    setSearchResults(data);
    
  },200);


  const handleSearch  = async (term: string) => {
    setSearchString(term)
    if(!typingStart){
      setTypingStart(true);
    }


      const searchQuery = groq`
    *[_type in ["post", "answerWriting", "notes"] 
    && (
    title match $queryString + '*' 
    || name match $queryString + '*')
    || description match $queryString + '*'
    || subDescription match $queryString + '*'
    || subCategories[]->title match $queryString + '*'
    || detatils match $queryString + '*'
    ] 
    | order(publishedAt desc){
      _type, 
      slug, 
      title, 
      
    }[0...20]
  `;

  await handleApiCall(searchQuery, searchString);

  // const data = await client.fetch(searchQuery, {
  // queryString: searchString,
  // });

    // const data = await searchQueryResults(term);
    // console.log(data);
    // setSearchResults(data);

  };

  useEffect(()=>{
    setOpen(false);
  },[path])

  useEffect(() => {
    const handleOutSideClick = (event : MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        setSearchString("");
        setTypingStart(false);
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);


  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <div className="mx-2 border-spacing-1 border-[1px] px-[6px] py-[6px]  border-black flex items-center">
          <h1 className="ml-2 mr-2 flex lg:flex">Search</h1>
          <Search className="w-6 h-6" aria-label="search" />
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent
        asChild
        className="max-w-[95%] rounded-xl top-1/3 md:top-1/"
      >
        <div
          className="max-w-[100px]! md:max-w-[700px] bg-neutral-100"
          ref={ref}
        >
          {/* searchinput  */}
          <div className="relative flex flex-1 flex-shrink-0 mx-1 ">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className="peer block w-full h-11 rounded-lg border-0 border-gray-200 py-[4px] pl-10 text-lg outline-0 placeholder:text-gray-500"
              placeholder={"Search Posts, PYQs, Notes"}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              value={searchString}
            />
            <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>

          {/* results */}

          <ScrollArea className='max-h-[400px]'>
            <div className="">
              {searchResults.length > 0 ? (
                <>
                  <SearchResultComponent data={searchResults} />
                </>
              ) : (
                <>
                  <div>
                    {typingStart && (
                      <h1 className="text-center">No Result Found!</h1>
                    )}
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}


export default SearchBar