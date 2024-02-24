import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../../sanity/lib/client';
import { notFound } from 'next/navigation';
import PortTextEditor from '@/components/PostEditor/PortTextEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import YoutubeCard1 from '@/components/PostEditor/YoutubeCard';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 120;

export async function generateMetadata({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'notes' && slug.current ==$slug][0]
    {
        title, 
    }
    `;
  const title = await client.fetch(query, { slug: slug });
  if (!title)
    return {
      notFound: true,
    };

  return {
    title: title?.title,
  };
}

const NotesPageIndividual = async ({ params: { slug } }: Props) => {
    const query = groq`
    *[_type == 'notes' && slug.current ==$slug][0]
    {
        ...,
    }
    `;

    const post = await client.fetch(query, { slug: slug });

    if (!post) notFound();



  return (
    <div className="pl-4 sm:pl-10 pr-4 sm:px-8 min-h-[60vh] w-[100vw] lg:mx-4 flex flex-col lg:flex-row">
      <div className="px-6 lg:px-10 mb-10 lg:pb-10 lg:border-r border-neutral-200 lg:w-[60vw] mx-auto ">
        <h1 className="text-xl md:text-2xl py-6">{post.title}</h1>
        <div className="my-4 mb-16 ">
          <PortTextEditor post={post} />
        </div>
      </div>

      <div className="flex flex-col lg:space-y-6 h-full lg:w-[30vw] lg:mr-10 lg:px-4 border-0 border-red-500">
        <div className="">
          <Card className="m-6 lg:m-0">
            <CardHeader className="flex items-center justify-center">
              <CardTitle>Also Watch Video on Youtube</CardTitle>
              <CardDescription className="">{post.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center ">
              <div className="border-2 border-neutral-400 rounded-lg p-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] lg:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f00,0_0_15px_#ff0,0_0_30px_#f00]">
                <YoutubeCard1 link={post.youtubeLink} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotesPageIndividual
