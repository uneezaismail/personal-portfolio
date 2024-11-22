
"use client";
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const skills = [
    { src: "/typescript.png", alt: "TypeScript", name: "TypeScript" },
    { src: "/react.svg", alt: "React", name: "React" },
    { src: "/tailwind.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: "/Figma.webp", alt: "Figma", name: "Figma" },
    { src: "/next-js.svg", alt: "Next.js", name: "Next.js" },
    { src: "/uiux.jpeg", alt: "UI/UX Design", name: "UI/UX Design" },
  ];

  return (
    <div className="my-14 xl:my-20">
      <h3 className="mx-auto flex flex-col justify-center items-center mb-10 text-white">
        <span className="border-b-2 border-purple-400 text-3xl lg:text-4xl font-bold mb-4 xl:mb-6">SKILLS</span>
        <p className="text-sm lg:text-lg font-extralight text-gray-300">
          The Skills and tools I am really good at:
        </p>
      </h3>
      <div className="w-[90%] mx-auto mt-8 grid gap-8 grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="mx-auto flex flex-col items-center w-[100px] h-[150px] sm:w-[150px] sm:h-[200px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px] rounded-md group overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={skill.src}
                alt={skill.alt}
                fill
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="mt-4 text-sm md:text-lg font-semibold text-center text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
