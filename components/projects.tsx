'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  /**********Global State **********/

  const projects = [
    {
      id: 1,
      name: 'Project Title',
      category: {
        id: 1,
        name: 'React',
      },
      content:
        ' dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.  suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.',
      image:
        'https://images.unsplash.com/photo-1509463536615-1ca163bcfb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80',
      link: 'https://www.google.com',
      github: 'https://www.google.com',
      tags: ['React', 'Next.js', 'Sanity.io'],
    },
    {
      id: 2,
      name: 'Project Title',
      category: {
        id: 2,
        name: 'Next.js',
      },
      content:
        ' dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.  suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.',
      image:
        'https://images.unsplash.com/photo-1509463536615-1ca163bcfb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80',
      link: 'https://www.google.com',
      github: 'https://www.google.com',
      tags: ['React', 'Next.js', 'Python'],
    },
    {
      id: 3,
      name: 'Project Title',
      category: {
        id: 3,
        name: 'Python',
      },
      content:
        'dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.  suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.',
      image:
        'https://images.unsplash.com/photo-1509463536615-1ca163bcfb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=839&q=80',
      link: 'https://www.google.com',
      github: 'https://www.google.com',
      tags: ['React', 'Next.js', 'Python', 'Javascript'],
    },
  ];

  const [data, setData] = useState(projects);

  //********** Use Effect **********//

  // static projects data

  interface projectType {
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
  }
  const Project: React.FC<projectType> = (props) => {
    return (
      <div className='grid grid-cols-12  gap-4 mb-8 last:mb-0'>
        <div className='col-span-5'>
          <Image
            src={props.image}
            alt={props.name}
            className='rounded-lg'
            width={340}
            height={240}
          />
        </div>
        <div className='col-span-7'>
          <h3 className='text-3xl font-kanit font-bold mb-2'>{props.name}</h3>
          <p className='text-base font-normal font-kanit mb-4'>
            <span className='font-bold'>Project Description : </span>
            {props.description}
          </p>
          <div className='flex flex-wrap gap-1'>
            {props.tags.map((tag: any) => {
              return (
                <span
                  key={tag}
                  className='text-xs bg-[#23455A] font-kanit text-white px-2 py-1 rounded-lg mr-2 mb-2'
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className='flex gap-2 mt-4'>
            <a href={props.link} target='_blank' rel='noreferrer'>
              <button className='border-solid border-2 text-teal-300 border-teal-300  font-kanit  text-base font-normal w-[130px] h-[40px] flex items-center justify-center rounded-lg'>
                Demo
              </button>
            </a>
            <a href={props.github} target='_blank' rel='noreferrer'>
              <button className='bg-white h text-white font-kanit flex gap-3 font-bold w-[130px] h-[40px] flex items-center justify-center  rounded-lg'>
                <Image
                  src='/images/github_black.svg'
                  alt='github icon'
                  height={24}
                  width={24}
                />
                <span className='text-black text-base font-normal'>
                  KILKODE
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  //*********** Handle Category ************//
  const [active, setActive] = useState(0);
  const handleCategory = (id: number) => {
    setActive(id);
    if (id === 0) {
      setData(projects);
    } else {
      let newData = projects.filter(
        (project: any) => project.category.id === id
      );
      setData(newData);
    }
  };
  let category: any = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'Next.js',
    },
    {
      id: 3,
      name: 'Python',
    },
  ];
  let renderCategory = category.map((category: any, index: number) => {
    return (
      <li
        key={index}
        onClick={() => handleCategory(category.id)}
        className={`text-xl font-kanit font-normal cursor-pointer  mb-2 ${
          active === category.id ? 'text-teal-300' : 'text-white'
        }`}
      >
        {category.name}
      </li>
    );
  });
  return (
    <div className='bg-[#0E1821]'>
      <div className='container'>
        <div className='px-[180px] py-[96px] text-white'>
          <h2 className='font-kanit font-semibold text-4xl mb-4 uppercase'>
            Prosjekter
          </h2>
          <ul className='flex flex-wrap gap-4 mb-8'>{renderCategory}</ul>
          {data.map((project: any) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                description={project.content}
                image={project.image}
                link={project.link}
                github={project.github}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
