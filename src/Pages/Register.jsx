import { useState } from "react";
import signUpImg from "../Images/Sign up.gif"
import {Link} from "react-router-dom"
import React from "react";


const Register = () => {

    return (
        <section className="h-screen bg-gray-200 flex justify-center items-center">
            <div className = "bg-white/50 w-[70em] h-[39em] overflow-hidden flex rounded-md">
                <img
                    src = { signUpImg }
                    className = "object-fit w-1/2 hover:scale-105 transition duration-300"
                    alt = "Register Image"
                />
            <form
                method="post"
                className="w-full h-full p-6 flex flex-col gap-4 bg-white"
            >
                <div>
                    <h1 className="text-4xl bg-gradient-to-tl from-teal-400 to-teal-900 bg-clip-text text-transparent text-center font-semi-bold uppercase">
                        Register
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
                        className="p-2 rounded-md focus:outline-none ring-1 ring-teal-500 transition duration-300 "
                        type="text"
                        placeholder="username"
                        name="username"
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label
                        className="w-full text-md "
                        htmlFor="email"
                    >
                        email:
                    </label>
                    <input
                        className="p-2 rounded-md focus:outline-none ring-1 ring-teal-500 transition duration-300 "
                        type="email"
                        placeholder="email"
                        name="email"
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
                        className="p-2 rounded-md focus:outline-none ring-1 ring-teal-500 transition duration-300 "
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label
                        className="w-full text-md "
                        htmlFor="confirm password"
                    >
                        confirm password:
                    </label>
                    <input
                        className="p-2 rounded-md focus:outline-none ring-1 ring-teal-500 transition duration-300 "
                        type="password"
                        placeholder="confirm password"
                        name="password2"
                    />
                </div>
                <div className="mt-2">
                    <button className="w-full bg-orange-400 py-2 rounded-md text-white hover:bg-orange-500 text-lg">
                        Register
                    </button>
                </div>
                <div className="flex gap-2">
                    <p>already have an account?</p>
                    <Link
                        className="text-blue-600 hover:underline transition duration-300"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
                <div>
                    <p className="text-center">or</p>
                </div>
            </form>
        </div>

        </section >
    );
};

export default Register;