import React from "react";
import { useState } from "react";
import loginImg from "../Images/Login.gif"
import {Link} from "react-router-dom"
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom"
import Navbar from "../Components/Navbar"



const Login = () => {

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSignIn = async(e) => {

        e.preventDefault()

        try{

            await signInWithEmailAndPassword(auth,email,password)
            alert("logged in")
            navigate("/signup")
        }
        catch (error){
            alert(error.message)
        }

    }
  
  return (
    <section className="h-screen flex justify-center items-center flex-col">
     <Navbar />
        <div className="bg-white mt-12 w-[70vw] h-[39em] overflow-hidden flex rounded-md">
        <img
          loading="lazy"
          src={loginImg}
          className="object-fit md:block hidden w-1/2 hover:scale-105 transition duration-300"
          alt="Register Image"
        />
        <form method="post" onSubmit={handleSignIn} className="w-full bg-teal-500 h-full p-6 flex flex-col gap-6 justify-center items-center gap-2">
          <div>
            <h1 className="text-4xl bg-gradient-to-tl from-orange-200 to-orange-600 bg-clip-text text-transparent text-center font-semi-bold uppercase">
              Login
            </h1>
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md text-white"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="p-2 rounded-md  focus:outline-none ring-1 focus:ring-orange-600 transition duration-300 "
              type="email"
              placeholder="email"
              name="email"
              onChange = {(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              className="w-full text-md text-white"
              htmlFor="password"
            >
              password:
            </label>
            <input
              className="p-2 rounded-md focus:outline-none ring-1 focus:ring-orange-600 transition duration-300 "
              type="password"
              placeholder="password"
              name="password"
              onChange = {(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="mt-2 w-full">
            <button className="w-full bg-orange-400 py-2 rounded-md text-white block hover:bg-orange-500 px-4 text-lg">
              Login
            </button>
          </div>
           <div className="mt-2">
             <Link
              className="text-white hover:underline transition duration-300"
              to="/reset-password"
            >
              reset password
            </Link>
          </div>
          <div className="flex gap-2 text-white">
            <p>Don't have account?</p>
            <Link
              className="text-white hover:underline transition duration-300"
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