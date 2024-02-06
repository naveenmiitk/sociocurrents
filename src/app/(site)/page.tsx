import Banner from '@/components/Banner/Banner'
import { Button } from '@/components/ui/button'
import { groq } from 'next-sanity';
import Image from 'next/image'
import { client } from '../../../sanity/lib/client';
import TopStory from '@/components/TopStory/TopStory';
import PostList from '@/components/PostList/PostList';
import { cn } from '@/lib/utils';
import { poppins } from './layout';
import PeopleShowcase from '@/components/Homepage/PeopleShowcase';
import Testimonial from '@/components/Homepage/Testimonial';
import SubFooter from '@/components/Homepage/SubFooter';
import { Post } from '@/lib/type/type';

const query = groq`
*[_type =='post']{
  ...,
  categories[]->
}| order(_createdAt desc)[0...4]
`

export const revalidate = 30;



export default async function Home() {
  const allposts = await client.fetch(query);
  const rawposts = allposts[0];
  const posts = allposts.slice(0,4);
  return (
    <main className='w-full'>
      <div className="w-[100vw] sm:w-[98vw] sm:mx-auto lg:w-[98vw] xl:w-[80vw] 2xl:w-[80vw] 2xl:mx-auto mx-0 lg:mx-auto xl:mx-auto flex flex-col items-center justify-between p-">
      <Banner/>
      <div className='w-full border-t-0 border-b-0 border-neutral--400/80 flex items-center bg-neutral--100 shadow--md shadow-slate--200/80 '>
        <div className='-skew-x-[20deg] ml-4 lg:ml-10 border-[0px] border-neutral-400 py-2  px-4 my-2 bg-black'>
        <h1 className={cn(' font-semibold text-2xl skew-x-[20deg] px-6 text-white', poppins.className)}>Latest</h1>
        </div>
        
      </div>
      <div className='mt-4'>
      <TopStory Post={rawposts}/>
      <div className='w-full border-t-0 border-b-0 border-neutral--400/80 flex items-center bg-neutral--100 shadow--md shadow-slate--200/80 '>
        <div className='-skew-x-[20deg] ml-4 lg:ml-10 border-[0px] border-neutral-400 py-2  px-4 my-2 bg-black'>
        <h1 className={cn(' font-semibold text-2xl skew-x-[20deg] px-6 text-white', poppins.className)}>Top Picks</h1>
        </div>
      </div>
      <PostList posts={posts} />

      </div>
      </div>
      <PeopleShowcase/> 
      <Testimonial/>
      <SubFooter/>
      
    </main>
  )
}
