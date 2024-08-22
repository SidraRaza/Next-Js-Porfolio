import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-yellow-400 to-orange-700 shadow-lg">
        <nav className="flex justify-between items-center p-5 relative">
          <div className="text-white text-3xl font-bold flex items-center">
            Portfolio
          </div>
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="text-white text-3xl cursor-pointer md:hidden absolute right-6 top-6 "
          >
            &#9776;
          </label>
          <ul className="flex-col list-none md:flex md:flex-row md:static absolute right-4 top-[70px] bg-gray-800 md:bg-transparent w-48 md:w-auto p-4 md:p-0 hidden peer-checked:flex z-10 rounded-md shadow-lg md:shadow-none">
            <li className="md:ml-6">
              <Link href="/" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                Home
              </Link>
            </li>
            <li className="md:ml-6 mt-2 md:mt-0">
              <Link href="/about" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                About
              </Link>
            </li>
            <li className="md:ml-6 mt-2 md:mt-0">
              <Link href="/contact" className="text-white block py-2 px-4 hover:bg-orange-500 hover:shadow-md rounded transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className="bg-[url('/12.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="relative min-h-[550px] h-auto md:h-[550px] p-4 md:p-10 flex justify-center items-center text-center z-0">
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  md:pt-10 bg-gradient-to-r from-yellow-400 to-orange-700 bg-clip-text text-transparent">
              Hello, I Am Sidra Raza
            </h1>
            <p className="sm:text-lg md:text-2xl text-white pt-4 md:pt-10 text-justify lg:px-20 md:px-10">
          "Hello! I'm a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
             With expertise in web development and a keen interest in AI and cloud technology, I'm always looking to push the boundaries
             of what's possible.  Plus, I'm also a graphic designer, bringing a creative touch to my work. Let's explore the intersection 
              of technology and innovation together!"</p>
          </div>
        </div>
      </div>
    </>
  );
}
