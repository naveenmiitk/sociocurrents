import { answerWriting, notes } from '@/lib/type/type';
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { topicsPaper2 } from '@/lib/type/staticData';
import { getBaseHref, matchCloseNumbers } from '@/lib/utils';



interface TopicWisePaper2Props {
  data: answerWriting[] | notes[];
}

const TopicWisePaper2: React.FC<TopicWisePaper2Props> = ({ data }) => {

  return (
    <div className="my-20 w-[80vw] mx-auto">
      {topicsPaper2.map((topic, index) => (
        <div key={index}>
          <h1 className="font-semibold">{topic.title}</h1>
          {topic.subtitles.map((subtopic, idx) => (
            <div key={idx} className="py-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h1 className="pl-2 text-left flex flex-1 justify-between">
                      {subtopic.topic}
                    </h1>
                    {data.filter((item) =>
                      matchCloseNumbers(item.details.split("/")[2], subtopic.id)
                    ).length > 0 ? (
                      <span className="text-right hover:no-underline! pr-8">
                        (
                        {
                          data.filter((item) =>
                            matchCloseNumbers(
                              item.details.split("/")[2],
                              subtopic.id
                            )
                          ).length
                        }
                        )
                      </span>
                    ) : (
                      <></>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    {subtopic.subtopic.map((basetopic, idx2) => (
                      <div key={idx2} className="py-1">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>
                              <h1 className="pl-6 text-left flex flex-1 justify-between">
                                {basetopic.subtopicTitle}
                              </h1>
                              {data.filter(
                                (item) =>
                                  item.details.split("/")[2] === basetopic.id
                              ).length > 0 ? (
                                <span className="text-right hover:no-underline! pr-8">
                                  (
                                  {
                                    data.filter(
                                      (item) =>
                                        item.details.split("/")[2] ===
                                        basetopic.id
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
                                  {post.details.split("/")[2] ===
                                    basetopic.id && (
                                    <div key={post._id} className="py-[6px]">
                                      <Link
                                        href={
                                          getBaseHref(post._type)?.concat(
                                            `${post.slug.current}`
                                          )!
                                        }
                                      >
                                        {" "}
                                        <h1 className="hover:text-red-600 text-[16px] md:text-lg pl-4 md:pl-8">
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TopicWisePaper2
