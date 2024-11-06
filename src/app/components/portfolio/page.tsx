// import Image from 'next/image';
// import React from 'react';

// const Portfolio = () => {
//   return (
//     <section className="p-8">
//       <h2 className="text-3xl font-bold text-center text-white mb-8">Portfolio</h2>
//       <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        
//         {/* Project 1 */}
//         <div className="flex flex-col items-center border-2 border-white p-4 rounded-lg">
//           <Image src={"/taiwind.png"} alt='project-1' width={200} height={200} className="rounded-md" />
//           <h3 className="text-xl font-semibold text-white mt-4">Project Title 1</h3>
//           <p className="text-sm text-gray-300 mt-2 text-center">
//             A brief description of the project goes here. This showcases some details about the project's purpose and technology used.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
//             View Project
//           </button>
//         </div>

//         {/* Project 2 */}
//         <div className="flex flex-col items-center border-2 border-white p-4 rounded-lg">
//           <Image src={"/taiwind.png"} alt='project-2' width={200} height={200} className="rounded-md" />
//           <h3 className="text-xl font-semibold text-white mt-4">Project Title 2</h3>
//           <p className="text-sm text-gray-300 mt-2 text-center">
//             A brief description of the project goes here. This showcases some details about the project's purpose and technology used.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
//             View Project
//           </button>
//         </div>

//         {/* Project 3 */}
//         <div className="flex flex-col items-center border-2 border-white p-4 rounded-lg">
//           <Image src={"/taiwind.png"} alt='project-3' width={200} height={200} className="rounded-md" />
//           <h3 className="text-xl font-semibold text-white mt-4">Project Title 3</h3>
//           <p className="text-sm text-gray-300 mt-2 text-center">
//             A brief description of the project goes here. This showcases some details about the project's purpose and technology used.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
//             View Project
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Portfolio;

'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleProjects((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    projects.forEach((project) => observer.observe(project));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Portfolio</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            data-index={index}
            className={`project flex flex-col items-center border-2 border-white p-4 rounded-lg transition-transform duration-700 ease-out
              ${visibleProjects[index] ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}
            `}
          >
            <Image src={"/taiwind.png"} alt={`project-${index + 1}`} width={200} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold text-white mt-4">Project Title {index + 1}</h3>
            <p className="text-sm text-gray-300 mt-2 text-center">
              A brief description of the project goes here. This showcases some details about the project&apos;s purpose and technology used.
            </p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
              View Project
            </button>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Portfolio;
