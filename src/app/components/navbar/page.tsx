// import React from 'react'
// import { FaBars } from 'react-icons/fa'

// const Navbar = () => {
//   return (
//    <nav className='flex justify-between w-full px-5 py-2 md:px-10 lg:px-20 m-auto md:py-4 items-center bg-white'> 
//     <div className='text-md lg:text-2xl text-purple-600 font-extrabold'> <span className='font-cookie text-4xl  lg:text-5xl'> Uneeza</span> ISMAIL</div>
//     <div className='font-serif'>
//         <ul className='hidden md:flex justify-between md:text-md lg:text-xl gap-x-5'>
//             <li className='hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2'>Home</li>
//         <li className='hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2'>Portfolio</li>
//         <li className='hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2'>About me</li>
//         </ul>
//     </div>
//     <div className='hidden md:block text-sm md:text-md lg:text-lg font-semibold'><button className='border-2 border-purple-600 py-1 px-1 md:py-2 md:px-4 text-purple-600 rounded-md '>Contact me</button></div>
//     <FaBars className='md:hidden text-purple-900' size={30}/>
//    </nav>
//   )
// }

// export default Navbar
// 'use client'

// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="relative flex justify-between w-full px-5 py-2 md:px-10 lg:px-20 m-auto md:py-4 items-center bg-white">
//       <div className="text-md lg:text-2xl text-purple-600 font-extrabold">
//         <span className="font-cookie text-4xl lg:text-5xl">Uneeza</span> ISMAIL
//       </div>
      
//       <div className="font-serif">
//         <ul className="hidden md:flex justify-between md:text-md lg:text-xl gap-x-5">
//           <li className="hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Home</li>
//           <li className="hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">About me</li>
//           <li className="hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Skills</li>
//           <li className="hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Portfolio</li>
//         </ul>
//       </div>
      
//       <div className="hidden md:block text-sm md:text-md lg:text-lg font-semibold">
//         <button className="border-2 border-purple-600 py-1 px-1 md:py-2 md:px-4 text-purple-600 rounded-md">
//           Contact me
//         </button>
//       </div>
      
//       <FaBars 
//         className="md:hidden text-purple-900 cursor-pointer" 
//         size={30} 
//         onClick={toggleDropdown} 
//       />

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-md  z-10 md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4">
//             <li className="hover:text-purple-700 text-lg">Home</li>
//             <li className="hover:text-purple-700 text-lg">About me</li>
//             <li className="hover:text-purple-700 text-lg">Skills</li>
//             <li className="hover:text-purple-700 text-lg">Portfolio</li>
//             <li className="text-purple-600 font-semibold">
//               <button className="border-2 border-purple-600 py-2 px-4 rounded-md">Contact me</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



'use client'

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative flex justify-between w-full px-5 py-2 md:px-10 lg:px-20 m-auto md:py-4 items-center bg-white">
      <div className="text-md lg:text-2xl text-purple-600 font-extrabold nav-name">
        <span className="font-cookie text-4xl lg:text-5xl">Uneeza</span> ISMAIL
      </div>
      
      <div className="font-serif">
        <ul className="hidden md:flex justify-between md:text-md lg:text-xl gap-x-5">
          <li className="nav-item hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Home</li>
          <li className="nav-item hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">About me</li>
          <li className="nav-item hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Skills</li>
          <li className="nav-item hover:text-purple-700 hover:border-b-purple-600 hover:border-b-2">Portfolio</li>
        </ul>
      </div>
      
      <div className="nav-item hidden md:block text-sm md:text-md lg:text-lg font-semibold">
        <button className="border-2 border-purple-600 py-1 px-1 md:py-2 md:px-4 text-purple-600 rounded-md">
          Contact me
        </button>
      </div>
      
      <FaBars 
        className="md:hidden text-purple-900 cursor-pointer fa-bars" 
        size={30} 
        onClick={toggleDropdown} 
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="nav-item hover:text-purple-700 text-lg">Home</li>
            <li className="nav-item hover:text-purple-700 text-lg">About me</li>
            <li className="nav-item hover:text-purple-700 text-lg">Skills</li>
            <li className="nav-item hover:text-purple-700 text-lg">Portfolio</li>
            <li className="nav-item text-purple-600 font-semibold">
              <button className=" border-2 border-purple-600 py-2 px-4 rounded-md">Contact me</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
