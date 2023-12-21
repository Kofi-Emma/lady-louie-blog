import { createClient, groq } from "next-sanity";
import { Post } from "@/types/Posts";
import { HeroPost } from "@/types/HeroPost";

import config from "./schemas/config/client-config";

export async function getHeroPost(): Promise<HeroPost[]> {
  return createClient(config).fetch(
    groq`*[_type == "hero-post"]{
      _id,
      title,   
      body
        }`
  );
}

export async function getPosts(): Promise<Post[]> {
  return createClient(config).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      "slug": slug.current,
      title,
      "mainImage" : mainImage.asset->url,
      publishedAt,
      categories,
      body,
      excerpt
        }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title, 
            "slug": slug.current,
            "mainImage": mainImage.asset->url,
            categories,
            publishedAt,
            body
        }`,
    { slug }
  );
}

/*export async function getPages(): Promise<Page[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }
    `
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}*/
