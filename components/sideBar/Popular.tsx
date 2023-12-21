import React from "react";
import PopularPosts from "../PopularPosts";

const Popular = () => {
  return (
    <section>
      <h1 className='text-xl font-bold mb-8 border-b-[1px] border-[--text-color] pb-2 pt-8'>
        Most Read
      </h1>
      <PopularPosts />
    </section>
  );
};

export default Popular;
