import { groq } from "next-sanity";
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import PortableText from "react-portable-text";
import { urlForImage } from "../../../../../sanity/lib/image";
import { cn } from "@/lib/utils";
import { poppins } from "../../layout";
import PortTextEditor from "@/components/PostEditor/PortTextEditor";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 120;

export async function generateStaticParams() {
  const query = groq`
  *[_type =='answerWriting']{
  slug
  }| order(_createdAt desc)[0...10]
  `
  const allposts = await client.fetch(query);
  // console.log(allposts);

  return allposts.map((post : any) => ({
      slug: post.slug.current,
    }))
  
}


export async function generateMetadata ({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'answerWriting' && slug.current ==$slug][0]
    {
        title, 
    }
    `;
  const title = await client.fetch(query, { slug: slug });
    if(!title)
    return {
      notFound : true, 
    }

  return {
    title : title?.title, 
  }

}

const AnswerWritingPageIndividual = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'answerWriting' && slug.current ==$slug][0]
    {
        ...,
    }
    `;

  const post = await client.fetch(query, { slug: slug });
  // console.log("–––––––––––––––––––––––––––");
  // console.log('slugs',slug);
  // console.log('post in individual post',post);

    if(!post)
    notFound();

  return (
    <div className="max-w-6xl mx-auto pl-4 sm:pl-10 pr-4 sm:px-8 text-justify">
      <h1 className="text-2xl md:text-3xl py-6">{post.title}</h1>
      <PortTextEditor post={post}/>

      {/* <PortableText
        content={post.body}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className="text-justify mb-20"
        serializers={{
          h1: ({ children }: any) => (
            <h1 className="text-2xl py-5 font-bold text-red-800">{children}</h1>
          ),
          h2: (props: any) => (
            <h2
              className="text-red-500 font-bold text-2xl font-serif py-5"
              {...props}
            />
          ),
          // ul:({children}:any) => (
          //     <span className='inline'>
          //     <li className="list-disc"> {children}</li>
          //     </span>
          // ),
          // ol:({children}:any) => (
          //     <span className='inline'>
          //     <li className="list-decimal"> {children}</li>
          //     </span>
          // ),
          li: ({ children }: any) => (
            <span className="my-2">
              <li className="list-decimal ml-6 px-2 md:ml-10 mb-1 text-[16px] md:text-[18px]">
                {children}
              </li>
            </span>
          ),
          h3: ({ children }: any) => (
            <h3
              className={cn(
                "text-xl py-5 font-semibold text-red-700",
                poppins.className
              )}
            >
              {children}
            </h3>
          ),
          h4: ({ children }: any) => (
            <h1 className="text-xl py-5 font-bold text-red-500">{children}</h1>
          ),
          blockquote: ({ children }: any) => (
            <blockquote className="border-l-[#e6141e] border-l-4 pl-5 py-5 my-5">
              {children}
            </blockquote>
          ),
          normal:({children} : any) =>  (
            <>
           {(children.length === 1 && children[0] === '') ?  
             <br/> : <p className='text-[16px] md:text-[18px]'>{children}</p> }
            </>
        ),
          highlight: ({ children }: any) => (
            <p className="text-[16px] md:text-[16px] bg-yellow-200 pr-2 pl-1 inline-block">
              {children}
            </p>
          ),
          strong: ({ children }: any) => (
            <span className="font-bold py-2 inline">{children}</span>
          ),
          link : ({children} : any) => (
            <p className='text-nowrap underline underline-offset-4 text-red-600 cursor-pointer'>{children}</p>
         ),

          image: (props: any) => {
            console.log("props", props);
            return (
              <div className="relative my-2 max-h-[500px] max-w-[500px] image-container flex items-center justify-center border-0 border-red-500">
                <Image
                  className="object-contain border-0 border-blue-500 image"
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
      /> */}
    </div>
  );
};

export default AnswerWritingPageIndividual;
