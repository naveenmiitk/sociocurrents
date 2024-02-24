import { topicsPaper1 } from '@/lib/type/staticData'
import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Post, answerWriting, notes } from '@/lib/type/type';
import { getBaseHref } from '@/lib/utils';

interface TopicWisePaper1Props {
    data : answerWriting[] | notes[];
}

const TopicWisePaper1:React.FC<TopicWisePaper1Props> = ({data}) => {
  return (
    <div className="my-20 w-[80vw] mx-auto">
      {topicsPaper1.map((topic, index) => (
        <div key={index}>
          <h1 className="font-semibold">{topic.title}</h1>
          {topic.subtitles.map((subtopic, idx) => (
            <div key={idx} className="py-1">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h1 className="pl-2 text-left flex flex-1 justify-between">
                      {subtopic.topic}
                    </h1>
                    {data.filter(
                      (item) => item.details.split("/")[2] === subtopic.id
                    ).length > 0 ? (
                      <span className="text-right hover:no-underline! pr-8">
                        (
                        {
                          data.filter(
                            (item) => item.details.split("/")[2] === subtopic.id
                          ).length
                        }
                        )
                      </span>
                    ) : (
                      <></>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    {data?.map((post) => (
                      <div key={post._id}>
                        {post.details.split("/")[2] === subtopic.id && (
                          <div key={post._id} className="py-[6px]">
                              <Link href={getBaseHref(post._type)?.concat(`${post.slug.current}`)!}>
                              {" "}
                              <h1 className="hover:text-red-600 text-[16px] md:text-lg  pl-4 md:pl-8">
                                ✅ {post.title}
                              </h1>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TopicWisePaper1
