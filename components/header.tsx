'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  //************global state************//
  const [collapsed, setCollapsed] = useState(false);

  //************handle mobile nav************//
  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      {/*desktop nav*/}
      <nav className='font-segio bg-[#1F2937] md:block hidden'>
        <div className='container flex justify-between items-center py-[32px]'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/images/logo.svg'
                width={190}
                height={32}
                alt='logo'
              />
            </Link>
          </div>
          <div className='flex items-center md:gap-[24px]'>
            <a href='#about' className={`text-white text-lg`}>
              About
            </a>
            <a href='#projects' className={`text-white text-lg`}>
              Projects
            </a>
            <a href='#footer' className={`text-white text-lg`}>
              Contact
            </a>
            <a
              download='/resource/cv.pdf'
              href='/resource/cv.pdf'
              className={`text-white text-lg`}
            >
              CV
            </a>
          </div>
        </div>
      </nav>
      <nav className='bg-[#010C15] font-inter relative md:hidden block'>
        <div className='container flex justify-between py-[34px] items-center   '>
          <div className='flex items-center'>
            <Link className={`text-[#43D9AD] text-lg`} href='/'>
              james_dasher
            </Link>
          </div>
          <div onClick={handleCollapse} className='flex items-center'>
            {collapsed ? (
              <Image
                width={20}
                height={20}
                src='/images/times.svg'
                alt='icon'
              />
            ) : (
              <Image width={20} height={20} src='/images/bar.svg' alt='icon' />
            )}
          </div>
        </div>
        <div className={`border-b-[3px] border-solid border-[#43D9AD]`}></div>
        {collapsed && (
          <div className='flex absolute w-full bg-[#010C15] top-[99px] left-0 flex-col items-center justify-center py-[76px]'>
            <button className={`text-white text-sm mb-2.5`}>About</button>
            <button className={`text-white text-sm mb-2.5`}>Projects</button>
            <button className={`text-white text-sm mb-2.5`}>Contact</button>
            <button className={`text-white text-sm`}>CV</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
