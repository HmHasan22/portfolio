import React from 'react';
import Image from 'next/image';

const Footer = () => {
  let leftSide = [
    {
      icon: '/images/email.svg',
      content: 'jamesdasher.dev@gmail.com',
      link: 'mailto:jamesdasher.dev@gmail.com',
    },
    {
      icon: '/images/phone.svg',
      content: '+47 99 99 99 99',
      link: 'tel:+4799999999',
    },
  ];
  let rightSide = [
    {
      icon: '/images/github.svg',
      content: 'Github',
      link: 'https://github.com/HmHasan22',
    },
    {
      icon: '/images/linkedin.svg',
      content: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mahmudul-hasan-b6b596192/',
    },
  ];
  type footerContent = {
    title: string;
    data: any;
  };
  const FooterContent = ({ title, data }: footerContent) => {
    return (
      <div className='flex flex-col justify-center'>
        <h2 className='font-kanit font-semibold text-xl mb-5'>{title}</h2>
        <div className='flex  flex-col gap-4'>
          {data.map((item: any, index: number) => (
            <a href={item.link} className='flex gap-4 items-center' key={index}>
              <Image
                style={{ objectFit: 'contain' }}
                src={item.icon}
                alt='icon'
                width={20}
                height={20}
              />
              <p>{item.content}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  return (
    <footer id='footer' className='bg-[#06111A] text-white py-[56px]'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <FooterContent data={leftSide} title='Kontakt Informasjon' />
          <FooterContent data={rightSide} title='Knytt Kontakt' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
