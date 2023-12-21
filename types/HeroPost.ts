import { PortableTextBlock } from "sanity";

export type HeroPost = {
  _id: string;
  title: string;
  body: PortableTextBlock[];
};
