
// import React from 'react';

// const NavBar = () => {
//   return (
//     <header className="bg-white px-4 py-2">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-10">
//           <a href="#" className="text-black font-bold text-xl">BookUsNow</a>
//           <button className="bg-black text-white px-5 py-1 rounded">Categories</button>
//           <div className="flex  items-center border-2 border-gray-300 rounded overflow-hidden ">
//             <input type="text" placeholder="DJI phantom" className="px-4 py-1 w-full text-black bg-white outline-none" />
//             <button className="bg-red-500 text-white px-3 py-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <a href="#" className="text-black hover:text-red-500 py-5">Favorites</a>
//           <a href="#" className="bg-gray-200 text-black px-3 py-1 rounded">Sign In</a>
//         </div>
//       </div>
//       <div className="flex items-center py-3 space-x-10 mt-2">
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Live shows</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Streams</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Movies</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Plays</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Events</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Sports</a>
//         <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Activities</a>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

import React from 'react';

const NavBar = () => {
  return (
    <header className="bg-white px-4 py-2 md:px-8 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-10 w-full md:w-auto">
          <a href="#" className="text-black font-bold text-xl">BookUsNow</a>
          <button className="bg-black text-white px-5 py-1 rounded hidden md:block">Categories</button>
          <div className="flex items-center border-2 border-gray-300 rounded overflow-hidden w-full md:w-auto">
            <input type="text" placeholder="DJI phantom" className="px-4 py-1 w-full text-black bg-white outline-none" />
            <button className="bg-red-500 text-white px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto mt-4 md:mt-0">
          <a href="#" className="text-black hover:text-red-500 py-5 hidden md:block">Favorites</a>
          <a href="#" className="bg-gray-200 text-black px-3 py-1 rounded">Sign In</a>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap items-center py-3 space-x-4 md:space-x-10 mt-2">
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Live shows</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Streams</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Movies</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Plays</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Events</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Sports</a>
        <a href="#" className="text-black hover:text-red-500 whitespace-nowrap bg-gray-200 text-black px-3 py-1 rounded">Activities</a>
      </div>
    </header>
  );
};

export default NavBar;