import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className={`min-h-[calc(100vh_-_99px)]  w-full pt-[32px] bg-[#1E1E1E] relative`}
    >
      {/*    download cv link*/}
      <div className='container'>
        <a
          className={`text-right block text-white text-lg font-segio underline`}
          download='/resource/cv.pdf'
          href='/resource/cv.pdf'
        >
          Download CV
        </a>
      </div>
      {/*    hero content*/}
      <div
        className={`container flex min-h-[calc(100vh_-_150px)] justify-center items-center gap-[100px]`}
      >
        <div>
          <Image
            src='/images/avatar.svg'
            alt='avatar'
            width={200}
            height={200}
          />
        </div>
        <div className={`flex flex-col text-left`}>
          <span className={`font-fira_code text-lg text-white`}>
            Hei, Jeg er
          </span>
          <h1 className={`text-white font-kanit text-5xl mb-4`}>
            James Dasher
          </h1>
          <p
            className={`text-xl font-fira_code text-[#43D9AD]`}
          >{`> Front-end developer `}</p>
          <a
            className={`mt-[40px] w-[200px] h-[50px] flex items-center justify-center rounded-[16px]  border border-white border-solid font-fira_code text-white text-xl`}
            href='#project'
          >
            Prosjekter
          </a>
          <a href='#about' className={`absolute bottom-0`}>
            <Image
              className={`mt-10`}
              src='/images/scroll-down.gif'
              alt='image'
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
