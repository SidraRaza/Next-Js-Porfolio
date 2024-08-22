import Link from 'next/link';
import Image from 'next/image'; // Correct import for Next.js Image component

export default function AboutHeader() {
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
            className="text-white text-3xl cursor-pointer md:hidden absolute right-6 top-6"
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
      
      <div className="max-w-[1320px] mx-auto md:py-[80] py-5 flex lg:pl-8 pt-10 flex-col sm:flex-row items-center  text-white min-h-[550px] h-auto md:h-[550px] shadow-lg bg-[url('/12.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen">
        <div className="basis-[40%] hover:scale-105 duration-300 border-green-500">
          <Image src="/o1.jpg" alt="About Us" className="w-full rounded-2xl" width={500} height={300}  />
        </div>
        <div className="basis-[60%] px-5">
          <h1 className="text-4xl text-center bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent ">About Us</h1>
          <p className="sm:text-lg md:text-1xl text-white pt-4 md:pt-10 text-justify">
          "Hello! I'm a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
             With expertise in web development and a keen intere in AI and cloud technology, I'm always looking to push the boundaries
             of what's possible.  Plus, I'm also a graphic designer, bringing a creative touch to my work. Let's explore the intersection 
              of technology and innovation together!"</p>
        </div>
      </div>
    </>
  );
}
