import React from "react";
import Image from "next/image";
import About from "./About";
import Instagram from "./Instagram";

const SideBar = () => {
  return (
    <div className='flex flex-col justify-center items-center small:basis-[30%] '>
      <About />
      <Instagram />
    </div>
  );
};

export default SideBar;
