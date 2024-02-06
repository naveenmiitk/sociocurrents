import React from 'react'
// import type Post from '../../../sanity/schemas/post'
import { ArrowRightIcon, Barcode } from 'lucide-react'
import Image from 'next/image'
import ClientSideRoute from '../Global/ClientSideRoute'
import { imageBuilder, urlForImage } from '../../../sanity/lib/image'
import { Post } from '@/lib/type/type'
// import category from '../../../sanity/schemas/category'
// import {Post, category} from '../../lib/type/type';
// import { Post, category } from '@/lib/type/type'
import defaultImage from '../../../public/default.jpeg';


const PostList = ({posts} : {posts: Post[]}) => {
    // console.log('posts in postlist', posts);
  return (
    <div className='mt-10 mb-10 border-0 border-red-400'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8  gap-x-8 lg:gap-10 lg:gap-y-16 lg:pb-24'>
            {posts.map(post  => (
                <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
                {/* <Link href={`/post/${post.slug.current}`} key={post._id}>  */}
                <div  className='cursor-pointer flex flex-col'>
                    <div className='w-full relative h-80'>
                        <Image
                             src={imageBuilder?.image(post.mainImage!).quality(20).auto('format').fit('scale').url() || defaultImage}
                             alt={post.title!}
                             className='object-cover object-left lg:object-center'
                             sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                             fill
                             priority={false}
                        />
                        {/* <div  className='flex border-0 border-neutral-400 rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100 image-container relative max-h-80'>
                            <Image
                            src={imageBuilder?.image(post.mainImage!).quality(20).auto('format').fit('scale').url() || defaultImage}
                            alt={post.title!}
                            className='image'
                            sizes={"50vw"}
                            fill
                            />
                        </div> */}

                        <div className='absolute bottom-0 w-full bg-gray-700 p-5 flex justify-between'>
                            <div>
                                <p className='font-bold text-white line-clamp-3'>{post.title}</p>
                                <div className='flex'>
                                <p className='text-amber-100 font-semibold text-[14px]'>{new Date(post._createdAt).toLocaleDateString(
                                "en-US", {
                                    day:"numeric",
                                    month:"long",
                                    year: "numeric",
                                }
                            )}</p>
                             <div className='flex border-0 border-red-500 items-center mx-4'>
            <Barcode className='w-4 h-4 rotate-[90deg] text-amber-100'/>
            <p className='text-amber-100 text-[12px]'>{post.minutesRead} minute Read</p>
            </div>
            </div>

                           

                            </div>

                            <div className='flex flex-col lg:flex-row gap-y-2 md:gap-x-2 items-center'>
                                {post.categories.map((category, item)=>(
                                    <div className='bg-red-600 px-3 py-1 text-center rounded-full text-sm font-semibold' key={item}>
                                        <p className='text-white'>{category.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </div>

                     <div className='mt-5 flex-1 pl-4 md:pl-0'>
                        <p className=' text-lg font-bold line-clamp-2'>{post.title}</p>
                        <p className='line-clamp-2'>{post.description}</p>
                     </div>
                        
                        <div className='text-red-600 pl-4 md:pl-0'>
                        <p className='mt-2 font-bold flex items-center hover:underline'>Read Post
                        <ArrowRightIcon className='ml-1 h-4 w-6'/>
                        </p>
                    </div>
                    
                    

                </div>
                </ClientSideRoute>
            ))}
        </div>

       

     </div>


  )
}

export default PostList