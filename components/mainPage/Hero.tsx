import { getHeroPost } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

const Hero = async () => {
  const post = await getHeroPost();

  return (
    <section className='flex flex-col justify-between msmall:flex-row msmall:justify-center items-center min-h-[100vh] msmall:min-h-[50vh] small:min-h-[100vh] w-auto mb-8 xsmall:mb-10 small:mb-16 shadow-md bg-[--secondary-color] overflow-hidden '>
      <div className='basis-[50%] pt-[10rem] msmall:pt-0'>
        {post.map((item) => (
          <div
            key={item._id}
            className='flex flex-col justify-center items-center gap-[2rem] text-[--text-color] px-6 small:px-[4rem] medium:px-[6rem] large:px-[8rem] text-center msmall:pt-[5rem] small:pt-[3rem] medium:p-0'
          >
            <h1 className='font-bold text-2xl small:text-3xl medium:text-4xl '>
              {item.title}
            </h1>
            <PortableText value={item.body} />
          </div>
        ))}
      </div>
      <div className='relative basis-[50%] '>
        <Image
          src='/Louie.png'
          width={388}
          height={460}
          alt='Lady Louie'
          className=' msmall:absolute object-cover w-[280px] left-0 bottom-0 msmall:w-[345px] small:w-[460px] medium:w-[552px] msmall:left-[2rem] msmall:bottom-[-1.5rem] small:bottom-[-5rem] medium:bottom-[-3rem]'
        />
        <div className=' bg-[url("/img/hero-bg.png")] w-full hidden msmall:block msmall:min-h-[50vh] small:min-h-[100vh]'></div>
      </div>
    </section>
  );
};

export default Hero;
