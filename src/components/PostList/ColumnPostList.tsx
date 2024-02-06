import { Post } from '@/lib/type/type'
import Image from 'next/image'
import React from 'react'
import { imageBuilder, urlForImage } from '../../../sanity/lib/image'
import { ArrowRight, ChevronRight, Loader, Loader2 } from 'lucide-react'
import ClientSideRoute from '../Global/ClientSideRoute'
import defaultImage from '../../../public/default.jpeg';


const ColumnPostList = ({posts} : {posts: Post[] | null}) => {
  if(!posts)
  return (
    <div className='flex items-center justify-center min-h-[50vh]'>
    <Loader2 className='animate-spin w-8 h-8 '/>
    <span className='ml-2'>Loading...</span>
    </div>
    )
  return (
    <div className='mt-10 mb-10'>
      <div className='mx-4 md:max-w-[60%]'>
        {posts.map((item, index) => (
          <ClientSideRoute key={index} route={`/post/${item.slug.current}`}>
          <div  className='flex border-2 border-neutral-400 max-h-[160px] mb-6 max-w-[800px] min-w-[300px] rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100'>
            <div className='min-w-[30%] sm:w-[50%] md:min-w-[20%] mr-2 border-0 border-blue-500 max-h-[160px]'>
            <div className='relative w-full h-full border-0 border-red-500 mr-4'>
              <Image
              src={imageBuilder?.image(item.mainImage!).quality(20).crop('center').url() || defaultImage}
              alt={item.title!}
              className='object-cover object-center rounded-lg p-1'
              sizes={"50vw"}
              // width={100}
              // height={100}
              fill
              />
            </div>
            </div>


            <div>
            <div className='border-b-[1px] border-neutral-400 pb-2'>
              <div className='flex items-center justify-between pr-4 pb-2'>
              <h1 className='pr-2 line-clamp-2 text-[16px] md:text-[18px]'>{item.title}</h1>
              <ChevronRight className='w-4 h-4'/>
              </div>
            
            <h1 className='text-sm text-neutral-500 line-clamp-2'>{item.description}{item.description}{item.description}</h1>
            </div>

            <div className='py-2 flex items-center'>
            <p className='text-neutral-500 font-normal text-sm '>{new Date(item._createdAt).toLocaleDateString(
                                "en-US", {
                                    day:"numeric",
                                    month:"long",
                                    year: "numeric",
                                }
                            )}</p>
            </div>

            </div>
           
          </div>
          </ClientSideRoute>
        ))}
      </div>
        

    </div>
  )
}

export default ColumnPostList