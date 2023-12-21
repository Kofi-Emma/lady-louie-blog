import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  mainImage: string;
  categories: string;
  publishedAt: Date;
  body: PortableTextBlock[];
  excerpt: string;
};
