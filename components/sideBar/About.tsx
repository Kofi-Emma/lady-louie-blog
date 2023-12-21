import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className=''>
      <div className='p-4 flex flex-col items-center justify-center'>
        <h1 className='pb-3 font-semibold'>About me</h1>
        <Image
          src='/Louisa-blog.jpg'
          width={346}
          height={432}
          alt='Lady Louie'
          className='pb-3'
        />
        <h2 className='text-center'>
          Bold and dynamic young communication professional.
          Affable, enthusiastic, service oriented and
          industrious individual{" "}
        </h2>
      </div>
    </section>
  );
};

export default About;
