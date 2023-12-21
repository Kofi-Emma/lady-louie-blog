import React from "react";
import Image from "next/image";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import SideBar from "@/components/sideBar/SideBar";

type Props = {
  params: { post: string };
};

const page = async ({ params }: Props) => {
  const slug = params.post;

  const post = await getPost(slug);

  return (
    <section className='flex justify-center items-start bg-[--primary-color] gap-14 pt-[4rem] small:pt-[6rem] pb-3 px-2 lg:px-[4rem] 2xl:px-[13rem] text-[--text-color]'>
      <div className=' mb-16 xsmall:basis-[95%] small:basis-[70%]'>
        <h1 className='font-semibold text-2xl xsmall:text-3xl small:text-4xl py-12'>
          {post.title}
        </h1>
        <Image
          src={post.mainImage}
          alt={post.title}
          width={1280}
          height={720}
          className=' pb-6'
        />
        <div className='p-2 xsmall:px-[3rem] small:px-0'>
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
};

export default page;
