"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import {
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsWhatsapp,
} from "react-icons/bs";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleOpen = useCallback(() => {
    setToggle((prevToggle) => !prevToggle);
  }, []);

  const menuItems = [
    <Link href='/' passHref legacyBehavior key='1'>
      <a>HOME</a>
    </Link>,
    <Link href='/about' passHref legacyBehavior key='2'>
      <a>ABOUT</a>
    </Link>,
    <Link href='#contact' passHref legacyBehavior key='3'>
      <a> CONTACT</a>
    </Link>,
  ];

  return (
    <>
      <nav className='px-4 py-12 xsmall:p-[3rem] small:p-[3.5rem] flex justify-between items-center absolute top-0 bottom-0 left-0 right-0 z-10'>
        <div className=''>
          <Link href='/' passHref legacyBehavior key='1'>
            <a>
              <Image
                src='/Lady_Louie.png'
                height='36'
                width='126'
                alt='Brand Specific Logo'
              />
            </a>
          </Link>
        </div>

        <div className='hidden small:basis-[20%] msmall:block'>
          <div className='flex flex-row flex-wrap items-center justify-center gap-6 cursor-pointer'>
            <Link href='https://www.facebook.com/profile.php?id=100094124780041'>
              <BsFacebook size={18} color='#7b5222' />
            </Link>
            <Link href='https://www.instagram.com/brandspecifics'>
              <BsInstagram size={18} color='#7b5222' />
            </Link>
            <Link href='https://pin.it/1wx43K1'>
              <BsPinterest size={18} color='#7b5222' />
            </Link>
            <Link href='https://wa.me/message/AWEJSEUXZOX7B1'>
              <BsWhatsapp size={18} color='#7b5222' />
            </Link>
          </div>
        </div>

        <div className='hidden lg:flex lg:basis-[20%]  justify-around items-center text-[13px] cursor-pointer '>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className='hover:border-b-[3px] hover:border-b-orange-600 hover:duration-200'
            >
              {item}
            </li>
          ))}
        </div>

        <button
          className='lg:hidden p-3 bg-[--text-color] rounded-full'
          onClick={toggleOpen}
        >
          {toggle ? (
            <AiOutlineClose size={19} color='#ffff' />
          ) : (
            <AiOutlineMenu size={19} color='#ffff' />
          )}
        </button>
      </nav>

      {toggle && (
        <div className='absolute flex flex-col justify-center items-center text-[15px] font-medium bg-[--primary-color] top-[5rem] right-[1rem] rounded-lg text-[--text-color] text-center w-[10rem] h-[10rem]'>
          <ul className='flex flex-col gap-4'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={toggleOpen}
                className=''
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
