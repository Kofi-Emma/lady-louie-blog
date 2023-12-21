import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/sanity/sanity-utils";

const Posts = async () => {
  const posts = await getPosts();

  return (
    <section className=' medium:pb-12 text-[--text-color]'>
      <h1 className='font-bold text-lg small:text-xl medium:text-2xl px-4 pb-2 xsmall:pb-4 small:pb-6 text-center'>
        Recent Posts
      </h1>

      <div className=' grid msmall:grid-cols-2 large:grid-cols-3 gap-4 '>
        {posts.map((post) => (
          <div key={post._id} className='shadow-md mb-4'>
            <Link href={`/posts/${post.slug}`}>
              <div className=' h-[620px]  small:h-[600px] large:h-[590px] relative'>
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={1280}
                  height={720}
                  sizes='100vw'
                  style={{
                    objectFit: "cover",
                  }}
                  className=' h-[300px]  msmall:h-[290px]  small:h-[300px] medium:h-[300px] large:h-[290px]'
                />

                <div className='p-3'>
                  <div>
                    <h2 className='font-bold py-4 uppercase '>
                      {post.title}
                    </h2>
                    <p className=''>{post.excerpt}</p>
                  </div>
                </div>

                <div className='absolute bottom-[1rem] left-[9rem] xsmall:left-[12rem] msmall:left-[7.5rem] small:left-[11rem] medium:left-[15rem] large:left-[10rem]'>
                  <button className='text-white bg-[--tertiary-color] py-2 px-4 rounded-md '>
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
