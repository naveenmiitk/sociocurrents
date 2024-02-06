import { createClient } from 'next-sanity'


export const client = createClient({
  apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn : false,
})

export const writeClient = createClient({
  apiVersion : process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.NEXT_PUBLIC_USEREDITOR_TOKEN,
  useCdn: false, 
})