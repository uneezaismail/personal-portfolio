'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      imageSrc: '/interior.PNG',
      title: 'PearlVista',
      description: 'The Interior Design Portfolio showcases a collection of residential and commercial projects, focusing on creating aesthetically pleasing, functional spaces',
      link: 'https://interior-design-uneeza-ismails-projects.vercel.app/'
    },
    {
      id: 2,
      imageSrc: '/resume.PNG',
      title: 'Resume Builder',
      description: 'Whether youre in tech, finance, or any other industry, our platform makes creating a professional resume quick and easy. Just fill in your details and you are ready to impress.',
      link: 'https://shareable-resume-generator.vercel.app/'
    },
    {
      id: 3,
      imageSrc: '/coffee.PNG',
      title: 'Coffee Blog',
      description: 'The blog features a variety of articles discussing coffee beans, brewing techniques, product reviews, and stories from the coffee world.',
      link: 'https://coffee-blog-page.vercel.app/'
    },
  ];

  return (
    <section className="px-10 py-5 lg:my-28 w-[95%] lg:w-[90%] mx-auto lg:mb-10 h-fit">
      <h2 className="text-3xl xl:text-4xl font-bold text-center text-white mb-10 border-b-2 border-purple-400 w-fit flex mx-auto">Portfolio</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center border-2 border-white p-2 rounded-lg bg-white"
          >
            <div className="w-auto h-[200px] lg:w-[95%] overflow-hidden rounded-md">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md border-2 border-gray-400"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-sm mt-2 text-center">
              {project.description}
            </p>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
              View Project
            </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
