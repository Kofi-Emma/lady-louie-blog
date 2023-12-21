import React from "react";
import Link from "next/link";
import Image from "next/image";

const LogoBar = () => {
  return (
    <>
      <div className='bg-[--secondary-color] p-2 flex justify-center items-center'>
        <Link href='/' passHref legacyBehavior>
          <a>
            <Image
              src='/Lady_Louie.png'
              height='40'
              width='140'
              alt='Brand Specific Logo'
            />
          </a>
        </Link>
      </div>
      <div className='absolute top-[36.5%] left-[33.3333%] z-0'>
        <Image
          src='/Louisa-blog.jpg'
          width={518}
          height={460}
          alt='Lady Louie'
          className='pb-3'
        />
      </div>
    </>
  );
};

export default LogoBar;
