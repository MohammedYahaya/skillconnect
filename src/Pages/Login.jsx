import React from "react";
import { useState } from "react";
import loginImg from "../Images/Login.gif"
import {Link} from "react-router-dom"

const Login = () => {
  
  return (
    <section className="h-screen bg-gray-200 flex justify-center items-center">
     
        <div className="bg-white w-[70em] h-[39em] overflow-hidden flex rounded-md">
        <img
          loading="lazy"
          src={loginImg}
          className="object-fit w-1/2 hover:scale-105 transition duration-300"
          alt="Register Image"
        />
        <form method="post" className="w-full h-full p-6 flex flex-col gap-6 justify-center items-center gap-2">
          <div>
            <h1 className="text-4xl bg-gradient-to-tl from-teal-200 to-teal-600 bg-clip-text text-transparent text-center font-semi-bold uppercase">
              Login
            </h1>
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md "
              htmlFor="username"
            >
              username:
            </label>
            <input
              className="p-2 rounded-md  focus:outline-none ring-1 ring-teal-600 transition duration-300 "
              type="text"
              placeholder="username"
              name="username"
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md "
              htmlFor="password"
            >
              password:
            </label>
            <input
              className="p-2 rounded-md focus:outline-none ring-1 ring-teal-600 transition duration-300 "
              type="password"
              placeholder="password"
              name="password"
            />
          </div>
          <div className="mt-2">
            <button className="w-[24em] bg-orange-400 py-2 rounded-md text-white block hover:bg-orange-500 px-4 text-lg">
              Login
            </button>
          </div>
           <div className="mt-2">
             <Link
              className="text-blue-600 hover:underline transition duration-300"
              to="/reset-password"
            >
              reset password
            </Link>
          </div>
          <div className="flex gap-2">
            <p>Don't have account?</p>
            <Link
              className="text-blue-600 hover:underline transition duration-300"
              to="/signup"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;