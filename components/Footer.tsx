"use client";

import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsWhatsapp,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className='bg-[--secondary-color] p-4 msmall:p-12 text-[--text-color] flex justify-between items-center'>
      <div className=''>
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
      <div className='hidden msmall:flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6 cursor-pointer'>
        {[
          <Link href='/' passHref legacyBehavior key='1'>
            <a>HOME</a>
          </Link>,

          <Link
            href='/about'
            passHref
            legacyBehavior
            key='4'
          >
            <a> ABOUT</a>
          </Link>,
          <Link
            href='#contact-us'
            scroll={false}
            passHref
            legacyBehavior
            key='5'
          >
            <a>CONTACT</a>
          </Link>,
        ].map((item, index) => (
          <p key={index} className=' hover:transition'>
            {item}
          </p>
        ))}
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center gap-6 cursor-pointer'>
        <Link href='https://www.facebook.com/profile.php?id=100094124780041'>
          <BsFacebook size={18} />
        </Link>
        <Link href='https://www.instagram.com/brandspecifics'>
          <BsInstagram size={18} />
        </Link>
        <Link href='https://pin.it/1wx43K1'>
          <BsPinterest size={18} />
        </Link>
        <Link href='https://wa.me/message/AWEJSEUXZOX7B1'>
          <BsWhatsapp size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
