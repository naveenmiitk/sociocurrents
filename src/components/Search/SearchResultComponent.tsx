import { Post } from '@/lib/type/type'
import React from 'react'
import ClientSideRoute from '../Global/ClientSideRoute';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

interface SearchrResultComponentProps {
    data : Post[]
}

const SearchResultComponent:React.FC<SearchrResultComponentProps> = ({data}) => {
    if(!data)
    return (<div>
      <Loader2 className='w-4 h-4'/>
    </div>)
    // console.log('data : ', data);
  return (
    <div>
      {data.map((item, index)=>{
          if(item.slug?.current === undefined || item.slug?.current === null )
            return ;
          else
        return (
          <div key={index} className='max-h-[80vh] my-auto'>
          <Link href={item._type === 'post' ?  `/post/${item?.slug?.current}` :  `/answer-writing/${item?.slug?.current}`}>
          <div className='mx-2 border-b-2 border-neutral-200 py-4 flex items-center justify-between pr-2 hover:bg-yellow-400 rounded-lg'>
            <h1 className='ml-6 mr-2'> {item.title}</h1>
            <ArrowRight className='w-4 h-4'/>
          </div>
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResultComponent


// ( <div>
//   {<h1 className='text-center'>No Result Found! </h1>}
// </div>)