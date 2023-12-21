import React from "react";
import Posts from "../Posts";

const LatestPosts = () => {
  return (
    <section className='mb-16'>
      <h1 className='text-xl font-bold mb-8 border-b-[1px] border-[--text-color] pb-2'>
        Latest Posts
      </h1>
      <Posts />
    </section>
  );
};

export default LatestPosts;
