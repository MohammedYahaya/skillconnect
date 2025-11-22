import { useState } from "react";
import signUpImg from "../Images/Sign up.gif"
import {Link} from "react-router-dom"
import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"
import Navbar from "../Components/Navbar"


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSignUp = async(e) => {

        e.preventDefault()

        try{

            await createUserWithEmailAndPassword(auth,email,password)
            alert("Account created successfully")
            navigate("/login")
        }
        catch (error){
            alert(error.message)
        }

    }

    return (
        <section className="h-screen flex flex-col justify-center items-center">
           <Navbar />
            <div className = "bg-white mt-12 w-[70vw] h-[39em] overflow-hidden flex rounded-md">
                <img
                    src = { signUpImg }
                    className = "object-fit md:block hidden w-1/2 hover:scale-105 transition duration-300"
                    alt = "Register Image"
                />
            <form
                method="post"
                className="w-full h-full p-6 flex bg-teal-500 flex-col justify-center items-center gap-4 "
                onSubmit = {handleSignUp}
            >
                <div>
                    <h1 className="text-4xl text-white text-center font-semi-bold uppercase">
                        Register
                    </h1>
                </div>
              
                <div className="w-full flex flex-col">
                    <label
                        className="w-full text-md text-white"
                        htmlFor="email"
                    >
                        email:
                    </label>
                    <input
                        className="p-2 rounded-md focus:outline-none ring-1 focus:ring-orange-500 transition duration-300 "
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
                        className="p-2 rounded-md focus:outline-none ring-1 focus:ring-orange-500 transition duration-300 "
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange = {(e)=> setPassword(e.target.value)}
                    />
                </div>
               
                <div className="mt-2 w-full">
                    <button className="w-full bg-orange-400 py-2 rounded-md text-white hover:bg-orange-500 text-lg">
                        Register
                    </button>
                </div>
                <div className="flex gap-2 text-white">
                    <p>already have an account?</p>
                    <Link
                        className="text-white hover:underline transition duration-300"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>

        </section >
    );
};

export default Register;