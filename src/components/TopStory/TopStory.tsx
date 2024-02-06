import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imageBuilder, urlForImage } from '../../../sanity/lib/image'
import post from '../../../sanity/schemas/post';
import { Barcode, ChevronRight, Snail } from 'lucide-react';
import { Post } from '@/lib/type/type';
import TelegramLogo from '../../../public/telegram.svg'
import defaultImage from '../../../public/default.jpeg';



const TopStory = ({Post} : {Post: Post}) => {
  return (
    <div className='w-[100%] lg:w-[100%] mx-auto border-0 border-red-500'>
      <div className='flex flex-1 flex-col-reverse md:flex-row  bg-white-100 border-b-[0px] border-black pb-5 w-7/10 mx-auto'>
        <div className='flex flex-col flex-1 bg-white-100 lg:my-5 px-5 border-0 border-lime-500'>
        <p className='text-3xl font-bold my-2 lg:my-5'>{Post.title}</p>
        <div className='flex flex-row my-2 border-0 border-green-500'>
           <div>
          <ChevronRight className='w-5 h-5'/>
          </div>
        <p className='mx-5 text-[16px] md:text-lg lg:text-xl'>{Post.description}</p>
       
        </div>
        <div className='flex flex-row my-2 border-0 border-red-500'>
        <div>
          <ChevronRight className='w-5 h-5'/>
          </div>
       
       
        <p className='mx-5 text-[16px] md:text-lg lg:text-xl'>{Post.subdescription}</p>
        </div>
        <div className='flex items-center justify-start mb-auto space-x-2 px-10 pt-5'>
          <Link href={`/post/${Post.slug.current}`}>
          <button className='bg-red-600 px-3 py-1 text-center rounded-full text-sm font-semibold'>
          <p className='text-white'>Read More</p>
          </button>
          </Link>
          <Link href={'https://t.me/sociocurrrents'} target="_blank" rel="noopener" >
          <Image src={TelegramLogo} width={40} height={40} alt='Telegramlogo'/>
          </Link>
            <div className='flex border-0 border-red-500 items-center'>
            <Barcode className='w-4 h-4 rotate-[90deg] text-neutral-400'/>
            <p className='text-neutral-400 pl-1'>{Post.minutesRead} minute Read</p>
            </div>
           
        </div>
        
        </div>

        <div className='relative w-full flex flex-1  bg-white-100 md:my-5 md:px-1 border-0 border-red-500'>
        
        
          <div className=' flex flex-1 bg-white-500 border-0 border-red-500'>
          <Link href={`/post/${Post.slug.current}`} className='relative w-full h-full min-h-[300px] lg:min-h-[400px] border-0 border-red-500'>
         <div  className='flex border-0 border-neutral-400 rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100 image-container relative max-h-[400px]'>
                            <Image
                            src={imageBuilder?.image(Post.mainImage!).quality(20).auto('format').fit('scale').url() || defaultImage}
                            alt={post.title!}
                            className='image'
                            sizes={"50vw"}
                            fill
                            priority={true}
                            />
                        </div>
        </Link>
          </div>
        
    
        
        </div>
      </div>
    </div>
  )
}

export default TopStory