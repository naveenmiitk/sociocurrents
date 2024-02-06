import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

interface searchQueryResultsProps {
  searchString : string;
}



export const searchQueryResults:React.FC<searchQueryResultsProps> =async ({searchString}) => {
  // console.log(searchString);

  const searchQuery = groq`
  *[_type in ["post", 'author', 'category'] 
  && (
  title match $queryString + '*' 
  || name match $queryString + '*')] 
  | order(publishedAt desc){
    title,
    name, 
    bio,
    body,
    'slug' : slug.current,
    description,
    'type': _type,
    
  }
`;

  const data = await client.fetch(searchQuery, {
  queryString: searchString,
  });

  return data; 
}