import bg_image from '../assets/about/about5.jpg'
import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { clientInstance } from '../features/sagas/allergySaga';

// const apiUrl = "https://4f4e-185-107-56-83.eu.ngrok.io/"


// export let clientInstance = axios.create({
//     headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "true",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     },
//     baseURL: apiUrl
// })

const Register = () => {

  const [user,setUser] = useState({email:'',password:'',confirmPassword:''})

  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(user)
    try {
     await clientInstance.post(`api/UserRegistration/register`,user);
     navigate('/login')
    } catch (err) {
      alert("Error registering")
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setUser({...user,[e.target.id]:e.target.value})
  }
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-[100%] bg-black/40 absolute h-screen">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={bg_image}
          alt="loginbg"
        />
      </div>
      <form onSubmit={handleSubmit}
       className="text-white relative flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-3xl">Register</h1>
        </div>
        <input
          className="mt-10 p-[12px] rounded-[10px]  focus:outline-blue-600 text-black"
          type="text"
          id="confirmPassword"
          onChange={handleChange}
          placeholder="first name"
        />
        <input
          className="mt-10 rounded-[10px] p-[12px] focus:outline-blue-600 text-black"
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="email"
        />
         <input
          className="mt-10 rounded-[10px] p-[12px] focus:outline-blue-600 text-black"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button
          className="mt-10 bg-red-600 p-3 text-white rounded-[10px]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;