import { createClient } from 'next-sanity'


export const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'v2025-04-30',
  useCdn: true, 
})


export const fetchProjects = async () => {
  const query = `
    *[_type == "project"]{
      title,
      description,
      tags,
      github,
      demo,
      "picture": picture.asset->url
    }
  `;
  return client.fetch(query);
};