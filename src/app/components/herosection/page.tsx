// 'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [displayedText, setDisplayedText] = useState<string[]>([]);
//   const paragraphText = "A A Creative Frontend Developer and UI/UX Designer.".split(" ");

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < paragraphText.length) {
//         setDisplayedText((prev) => [...prev, paragraphText[index]]);
//         index++;
//       } else {
//         setDisplayedText([]); 
//         index = 0; 
//       }
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className='flex-col md:flex-row md:flex justify-center md:justify-between w-[96%] md:w-[95%] lg:w-[90%] m-auto items-center h-[550px] px-4 py-8 md:p-8 rounded-lg md:mb-8 mb-20 max-h-full '>
//          <div className="flex md:hidden w-[250px] sm:w-[300px] image-wrapper m-auto mb-8 items-center justify-center">
//         <Image className='rounded-md border-white border-2' src={"/u-portfolio.avif"} alt='portfolio' width={250} height={250} />
//       </div>
//       <div className='flex justify-center items-start mx-auto flex-col md:justify-between w-[95%]  sm:w-[80%] md:w-[60%] '>
//         <span className='text-white text-2xl md:text-3xl font-roboto'>Hey, I am Uneeza</span>
//         <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-2xl lg:text-4xl xl:text-5xl my-4">
//   {displayedText.join(" ")}
// </h1>
//         <p className='font-semibold md:text-sm lg:text-lg text-white'>My journey in frontend development has equipped me with the skills to design intuitive interfaces that not only look great but also enhance usability.</p>
//       </div>
//       <div className="hidden md:block image-wrapper md:w-[300px] lg:w-[350px] xl:w-[400px] ">
//         <Image className='rounded-md' src={"/u-portfolio.avif"} alt='portfolio' width={400} height={500} />
//       </div>
//     </main>
//   );
// };

// export default Hero;


// 'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [displayedText, setDisplayedText] = useState<string[]>([]);
//   const [isHeroVisible, setIsHeroVisible] = useState(false); // New state to track visibility
//   const paragraphText = "A A Creative Frontend Developer and UI/UX Designer.".split(" ");

//   useEffect(() => {
 
//     const timeout = setTimeout(() => {
//       setIsHeroVisible(true);
//     }, 1500); 

//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < paragraphText.length) {
//         setDisplayedText((prev) => [...prev, paragraphText[index]]);
//         index++;
//       } else {
//         setDisplayedText([]); 
//         index = 0; 
//       }
//     }, 500);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <main className={`flex-col md:flex-row md:flex justify-center md:justify-between bg-red-400  w-[96%] md:w-[95%] lg:w-[90%] m-auto items-center px-4 py-8 md:p-8 rounded-lg md:mb-8 mb-20 transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
//       <div className="flex md:hidden w-[250px] sm:w-[300px] image-wrapper m-auto mb-8 items-center justify-center">
//         <Image className='rounded-md border-white border-2' src={"/u-portfolio.avif"} alt='portfolio' width={250} height={250} />
//       </div>
//       <div className='flex justify-center items-start mx-auto flex-col md:justify-between w-[95%]  sm:w-[80%] md:w-[60%] '>
//         <span className='text-white text-2xl md:text-3xl font-roboto'>Hey, I am Uneeza</span>
//         <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-2xl lg:text-4xl xl:text-5xl my-4">
//           {displayedText.join(" ")}
//         </h1>
//         <p className='font-semibold md:text-sm lg:text-lg text-white'>
//           My journey in frontend development has equipped me with the skills to design intuitive interfaces that not only look great but also enhance usability.
//         </p>
//       </div>
//       <div className="hidden md:block image-wrapper md:w-[300px] lg:w-[350px] xl:w-[400px]">
//         <Image className='rounded-md' src={"/u-portfolio.avif"} alt='portfolio' width={400} height={500} />
//       </div>
//     </main>
//   );
// };

// export default Hero;

'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const paragraphText = "A Creative Frontend Developer and UI/UX Designer.".split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHeroVisible(true);
    }, 1500);

    let index = 0;
    const interval = setInterval(() => {
      if (index < paragraphText.length) {
        setDisplayedText((prev) => [...prev, paragraphText[index]]);
        index++;
      } else {
        setDisplayedText([]);
        index = 0;
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main
      className={`relative flex-col md:flex-row md:flex justify-center md:justify-between w-[96%] md:w-[95%] lg:w-[90%] m-auto items-center px-4 py-8 md:p-8 rounded-lg md:my-16 lg:my-20 mb-20 transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ overflow: 'hidden' }} 
    >
      <div className="flex md:hidden w-[250px] sm:w-[300px] image-wrapper m-auto mb-8 items-center justify-center">
        <Image className="rounded-md border-white border-2" src="/u-portfolio.avif" alt="portfolio" width={250} height={250} />
      </div>
      <div className="flex justify-center items-start mx-auto flex-col md:justify-between w-[95%] sm:w-[80%] md:w-[60%]">
        <span className="text-white text-2xl md:text-3xl font-roboto">Hey, I am Uneeza</span>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-2xl lg:text-4xl xl:text-5xl my-4">
          {displayedText.join(" ")}
        </h1>
        <p className="font-semibold md:text-sm lg:text-lg text-white">
          My journey in frontend development has equipped me with the skills to design intuitive interfaces that not only look great but also enhance usability.
        </p>
      </div>
      <div className="hidden md:block image-wrapper md:w-[300px] lg:w-[350px] xl:w-[400px]">
        <Image className="rounded-md" src="/u-portfolio.avif" alt="portfolio" width={400} height={500} />
      </div>
    </main>
  );
};

export default Hero;
