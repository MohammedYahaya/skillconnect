import React, { useState } from "react";


const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow">
<h1 className="syncopate-bold text-2xl font-extrabold flex items-center">
            Skill
            <span className="text-blue-600 text-3xl font-extrabold relative ">
                <span className="absolute -top-1 -right-2 text-blue-300 opacity-60 text-lg">•</span>
                Connect
            </span>
        </h1>
        <div className="w-[20em]">
          <form className="hidden lg:flex justify-center items-center relative">
            <input type="text" placeholder="search here" className="focus:outline-teal-500 transition p-2 w-full rounded-full outline outline-1 outline-black"/>
            <input type="submit" value="search" placeholder="serach here" className="px-4 py-1 absolute right-1 cursor-pointer bg-black text-white hover:bg-black/60 transition rounded-full outline outline-1 outline-black"/>
          </form>
        </div>
        <ul className="hidden lg:flex justify-between items-center gap-12 bg-white">
          <div className="flex justify-between items-center gap-6">
            <li ><a className="mask-link" data-text="Categories" href="#"><span className="mask-link__text font-jakarta">Categories</span></a> </li>
            <li ><a className="mask-link" data-text="How it works" href="#"><span className="mask-link__text font-jakarta">How it works</span></a> </li>
            <li ><a className="mask-link" data-text="FAQ" href="#"><span className="mask-link__text font-jakarta">FAQ</span></a> </li>
          </div>
          <div>
            <li><a className="px-4 group py-2 bg-teal-500 hover:bg-teal-600 transition shadow-lg gap-1 cursor-pointer text-white rounded-full flex font-jakarta justify-center items-center">Sign up<svg 
            fill="currentColor"
      className="w-6 h-6 group-hover:translate-x-1 transition"
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2" id="Layer_2">
        <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/>
      </g>
    </svg></a></li>
          </div>          
        </ul>
        <div className="lg:hidden block" onClick={() => setIsClicked(!isClicked)}>
          {
          isClicked ? (<span className="text-3xl cursor-pointer">X</span>) :(
          <svg
          
          className="w-8 h-8 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <rect width="156" height="156" fill="none" />
          <line
            x1="40"
            y1="64"
            x2="216"
            y2="64"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="192"
            x2="216"
            y2="192"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </svg>
            )
        }
        </div>
      <div className={`transition-opacity duration-300 ${isClicked?"opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} w-full p-12 bg-gray-100 absolute top-16 left-0 z-40`}>
        <ul className="flex flex-col justify-center gap-4">
          <li ><a className="mask-link" data-text="Categories" href="#"><span className="mask-link__text font-jakarta">Categories</span></a> </li>
          <li ><a className="mask-link" data-text="How it works" href="#"><span className="mask-link__text font-jakarta">How it works</span></a> </li>
          <li ><a className="mask-link" data-text="FAQ" href="#"><span className="mask-link__text font-jakarta">FAQ</span></a> </li>
           <li><a className="px-4 py-2 bg-teal-500 hover:bg-teal-600 transition shadow-lg gap-1 cursor-pointer text-white rounded-full flex justify-center items-center">Sign up<svg 
            fill="currentColor"
      className="w-6 h-6"
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2" id="Layer_2">
        <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/>
      </g>
    </svg></a></li>
        </ul>
        <div className="w-[20em] mt-6">
          <form className="flex justify-center items-center relative">
            <input type="text" placeholder="search here" className="focus:outline-teal-500 transition p-2 w-full rounded-full outline outline-1 outline-black"/>
            <input type="submit" value="search" placeholder="serach here" className="px-4 py-1 absolute right-1 cursor-pointer bg-black text-white hover:bg-black/60 transition rounded-full outline outline-1 outline-black"/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;