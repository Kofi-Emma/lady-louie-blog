import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/sanity/sanity-utils";

const PopularPosts = async () => {
  const posts = await getPosts();

  return (
    <section>
      <div>
        {posts.map((post) => (
          <div key={post._id} className=' shadow-md mb-4'>
            <Link href={`/posts/${post.slug}`}>
              <div className='flex justify-center items-center gap-3 p-2'>
                <div className='basis-[40%]'>
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    width={1280}
                    height={720}
                    className='h-[80px] w-[142px] '
                  />
                </div>
                <h2 className='basis-[60%] text-[13px]'>
                  {" "}
                  {post.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
