import { groq } from 'next-sanity';
import React, { cache } from 'react'
import { client } from '../../../../../sanity/lib/client';
import { imageBuilder, urlForImage } from '../../../../../sanity/lib/image';
import Image from 'next/image';
// import { PortableText } from '@portabletext/react';
import PortableText from "react-portable-text"
import { RichTextComponents } from '@/components/PostEditor/RichTextEditor';
import { notFound } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import YoutubeCard from '@/components/PostEditor/YoutubeCard';
import Link from 'next/link';
import { Slug } from 'sanity';
import { Post } from '@/lib/type/type';
import PortTextEditor from '@/components/PostEditor/PortTextEditor';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';


type Props = {
    params: {
        slug: string;
    };
} 

export const revalidate = 120;


export async function generateStaticParams() {
    const query = groq`
    *[_type =='post']{
    slug
    }| order(_createdAt desc)
    `
    const allposts = await client.fetch(query);

    return allposts.map((post : any) => ({
        slug: post.slug.current,
      }))
    
}


export async function generateMetadata ({ params: { slug } }: Props) {
    const query = groq`
    *[_type == 'post' && slug.current ==$slug][0]
      {
          title, 
          description, 
          mainImage, 
      }
      `;
    const title = await client.fetch(query, { slug: slug });
    if(!title)
      return {
        notFound: true, 
      }
    return {
      title : title?.title, 
      description : title?.description, 
    //   openGraph : {
    //     images : [
    //         {
    //             url : imageBuilder.image(title.mainImage!).quality(10).auto('format').url(),
    //             width : 500, 
    //             height : 500, 
    //             alt  : title?.title
    //         }
    //     ],
    //     locale: 'en_US',
    //     type: 'website',
    //   }
    }
   
  }
  

const PostSlugPage = async ({params : {slug}}: Props) => {

    // console.log('slugIncomeing :', slug);
    const query = groq`
    *[_type == 'post' && slug.current ==$slug][0]
    {
        ...,
        categories[]->
    }
    `

   

    const post:Post = await client.fetch(query, {slug : slug});
    // console.log("🚀 ~ PostSlugPage ~ post:", post)
    // console.log('postId1:',post._id, post.slug.current);
    

    if(!post)
      notFound();

    const nextPostQuery = groq`
    *[_type == 'post' && _createdAt > $date ]
    {
        slug,
    } | order(_createdAt asc)[0]
    `
    const prevPostQuery = groq`
    *[_type == 'post' && _createdAt < $date ]
    {
        slug,
    }| order(_createdAt desc)[0]
    `
    const prevPostSlug = await client.fetch(prevPostQuery, {date : post._createdAt});
    const nextPostSlug = await client.fetch(nextPostQuery, {date : post._createdAt});
    // console.log('prevPostSlug',prevPostSlug);
    // console.log('nextPostSlug',nextPostSlug);
    // console.log("–––––––––––––––––––––––––––");
    // console.log('slugs',slug);
    // console.log('post in individual post',post);
    // console.log(post.youtubeLink);

    // console.log(post.sideImage1);


  return (
    <div className='w-[100vw] lg:mx-4 flex flex-col lg:flex-row border-0 border-red-500 mb-6'>
        <article className='px-6 lg:px-10 pb-10 lg:pb-10 lg:border-r border-neutral-200 lg:w-[60vw] mx-auto border-0 border-red-'>
        <section className='space-y-2 mb-5'>
            <div className='relative min-h-56 flex flex-col lg:flex-row justify-between '>
                {/* <div className='absolute top-0 w-full h-full bg-slate-50 opacity-10 blur-sm p-10'>
                    <Image
                    className='object-cover object-center mx-auto'
                    src={urlForImage(post?.mainImage!) || 'https://github.com/shadcn.png'}
                    alt={post.slug.current}
                    fill
                    />
                </div> */}

                <section className='p-5 w-full bg-yellow-50/30'>
                    <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                        <div>
                            <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                            <p className='text-amber-600 font-semibold '>{new Date(post._createdAt).toLocaleDateString(
                                "en-US", {
                                    day:"numeric",
                                    month:"long",
                                    year: "numeric",
                                }
                            )}</p>
                        </div>

                        <div className='hidden items-center space-x-2'>
                            <div className='max-w-20'>
                                <h3 className='text-lg font-bold font-serif'>{post.author.name!}</h3>
                            </div>
                            {/* <Image
                            className='rounded-full border-r-20'
                            src={post.author?.image! ? urlForImage(post.author?.image!) :  'https://github.com/shadcn.png'}
                            alt={post.author.name!}
                            height={40}
                            width={40}
                            /> */}
                           
                        </div>
                    </div>

                    <div>
                        <h2 className='italic pt-10'>{post.description}</h2>
                        <h2 className='italic pb-2 pt-3'>{post.subdescription}</h2>

                        <div className='flex items-center justify-end mt-auto space-x-2'>
                                {post.categories.map((category, index) =>(
                                    <div className='bg-red-600 px-3 py-1 text-center rounded-full text-sm font-semibold' key={index}>
                                        <p className='text-white'>{category.title}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>

        {/* <PortableText value={post.body} components={RichTextComponents}/> */}
        <PortTextEditor post={post}/>
      

        <div className='flex items-center justify-between my-10'>
            {prevPostSlug? <Link href={`/post/${prevPostSlug.slug.current}`} className='text-red-600 underline underline-offset-4 text-lg'><h1>Prev Post</h1></Link> : <><h1> </h1></>}
            {nextPostSlug? <Link href={`/post/${nextPostSlug.slug.current}`} className='text-red-600 underline underline-offset-4 text-lg'><h1>Next Post</h1></Link> :<><h1> </h1></>}
            
        </div>
        </article>
        <div className='flex flex-col lg:space-y-6 h-full lg:w-[30vw] lg:mr-10 lg:px-4 border-0 border-red-500'>
            <div className=''>
            <Card className='m-6 lg:m-0'>
            <CardHeader className='flex items-center justify-center'>
                <CardTitle>Also Watch Video on Youtube</CardTitle>
                <CardDescription>{post.title}</CardDescription>
            </CardHeader>
            <CardContent className='flex items-center justify-center '>
                {/* <YouTube videoId='2g811Eo7K8U' onReady={(e)=>console.log(e.target)}/> */}
                {/* <p>Card Content</p> */}
                <div className='border-2 border-neutral-400 rounded-lg p-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] lg:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f00,0_0_15px_#ff0,0_0_30px_#f00]'>
                <YoutubeCard link={post.youtubeLink}/>
                </div>
                
            </CardContent>
            <CardFooter>
                {/* <p>Card Footer</p> */}
            </CardFooter>
             </Card>

            </div>
       
          
        <div className='flex p-2 mx-6 my-2 lg:mx-0 lg:my-0 items-center justify-center'>
            <div className='border-2 border-neutral-400 rounded-lg p-2 '>
            <h1 className='text-xl font-semibold'>Value Addition</h1>
            </div>  
        {/* <h1 className='text-lg font-semibold px-6 lg:px-0 py-2 lg:py-0 text-white bg-black rounded-lg border-black'>Value Addition :</h1> */}
        </div>                          {/* grid */}
        <div className='grid mx-4 md:mx-6 lg:mx-0 grid-rows-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-6 mb-6 '>
            {post.sideImage1 ? <>
                <div className='flex flex-col'>
             <div className='border-2 border-neutral-400 rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100 image-container relative max-w-[500px]'>
              <Image
              src={imageBuilder?.image(post.sideImage1!).quality(20).auto('format').fit('scale').url()}
              alt={post.title!}
              className='image'
              sizes={"50vw"}
              fill
              /> 
            </div>
            {/* <div className='px-1 py-1 border-0 border-neutral-400 rounded-lg'>
              <h1 className='text-center text-[14px] text-neutral-400'>{post.sideImage1?.alt}</h1>
            </div>  */}
        </div>
        </> : <></>}

        {post.sideImage2 ? <>
        
        <div className='flex flex-col'>
             <div className='border-2 border-neutral-400 rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100 image-container relative max-w-[500px]'>
              <Image
              src={imageBuilder?.image(post.sideImage2!).quality(20).auto('format').fit('scale').url()}
              alt={post.title!}
              className='image'
              sizes={"50vw"}
              fill
              /> 
            </div>
            {/* <div className='px-1 py-1 border-0 border-neutral-400 rounded-lg'>
              <h1 className='text-center'>{post.sideImage2?.alt}</h1>
            </div>  */}
        </div>
   
        </> : <></>}

        {post.sideImage3 ? <>
            <div className='flex flex-col'>
             <div className='border-2 border-neutral-400 rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100 image-container relative max-w-[500px]'>
              <Image
              src={imageBuilder?.image(post.sideImage3!).quality(20).auto('format').fit('scale').url()}
              alt={post.title!}
              className='image'
              sizes={"50vw"}
              fill
              /> 
            </div>
            {/* <div className='px-1 py-1 border-0 border-neutral-400 rounded-lg'>
              <h1 className='text-center'>{post.sideImage3?.alt} </h1>
            </div>  */}
        </div>
   
        </> : <></>}

        {/* {post.sideImage2 ? <>
            <div  className='flex border-2 border-neutral-400 max-h-[160px] mb-6 max-w-[800px] min-w-[300px] min-h-[200px] rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100'>
            <div className='min-w-[99%] sm:w-[99%] md:min-w-[99%] mr-2 border-0 border-blue-500 max-h-[200px]'>
            <div className='relative w-full h-full border-0 border-red-500 mr-4'>
              <Image
              src={imageBuilder?.image(post.sideImage2!).quality(20).auto('format').fit('scale').url()}
              alt={post.title!}
              className='object-cover object-center rounded-lg p-1'
              sizes={"50vw"}
              // width={100}
              // height={100}
              fill
              />
            </div>
            
            </div>
        </div>
        </> : <></>}

        {post.sideImage3 ? <>
            <div  className='flex border-2 border-neutral-400 max-h-[160px] mb-6 max-w-[800px] min-w-[300px] min-h-[200px] rounded-lg p-1 bg-neutral-50 hover:bg-neutral-100'>
            <div className='min-w-[99%] sm:w-[99%] md:min-w-[99%] mr-2 border-0 border-blue-500 max-h-[200px]'>
            <div className='relative w-full h-full border-0 border-red-500 mr-4'>
              <Image
              src={imageBuilder?.image(post.sideImage3!).quality(20).auto('format').fit('scale').url()}
              alt={post.title!}
              className='object-cover object-center rounded-lg p-1'
              sizes={"50vw"}
              // width={100}
              // height={100}
              fill
              />
            </div>
            
            </div>
        </div>
        </> : <></>} */}
       

       
        </div>

        
    </div>
    </div>
  )
}

export default PostSlugPage



/*
  <PortableText 
        content={post.body}  
        projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className='text-justify'
        serializers ={{
            h1:({children} : any) => (
                <h1 className='text-2xl py-5 font-bold text-red-800'>{children}</h1>
            ),
            h2: (props:any) => <h2 className='text-red-500 font-bold text-2xl font-serif py-5' {...props}/>,
            li: ({ children}:any) => (
                <div className='my-2'>
                <li className="list-decimal ml-6 md:ml-10 mb-1 text-[16px] md:text-[18px]">{children}</li>
                </div>
            ),
            h3:({children} : any) => (
                <h3 className='text-xl py-5 font-bold text-blue-800'>{children}</h3>
            ),
            h4:({children} : any) => (
                <h1 className='text-xl py-5 font-bold text-red-600'>{children}</h1>
            ),
            blockquote:({children} : any) => (
                <blockquote className='border-l-[red] border-l-4 pl-5 py-5 my-5'>
                    {children}
                </blockquote>
            ),
            normal:({children} : any) => (
                <p className='text-[16px] md:text-[18px] '>{children}</p>
            ),
            highlight:({children} : any) => (
                <p className='text-[16px] md:text-[18px] bg-yellow-200 pr-2 pl-1 inline-block'>{children}</p>
            ),
            strong : ({children} : any) => (
                <span className='font-semibold py-2 inline'>{children}</span>
            ),
            //  hardbreak : ({children} : any) => (
            //     <span className='py-4'>{children}</span>
            // ), 
        
            
            image: (props: any) => {
                console.log('props',props);
                return(
                    <div className='relative my-2 max-h-[500px] max-w-[500px] image-container flex items-center justify-center border-0 border-red-500'>
                        <Image
                            className='object-contain border-0 border-blue-500 image'
                            src={urlForImage(props.asset._ref)}
                            alt={props?.alt || post.title || "Socio Currents"}
                            fill
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                        />
                        </div>
                        );
                    },
        
                }}
                />
   */