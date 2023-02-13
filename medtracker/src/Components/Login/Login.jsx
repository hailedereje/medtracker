import React, { useState } from "react";
// import logo from "../../assets/logo.png"
// import cover from './cover.png'
import { useDispatch, useSelector } from "react-redux";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginLogo from "./LoginLogo";
import { Link } from "react-router-dom";
import { userLogin } from "../../features/actions/actions";

export default function HelloLogin({onSubmit}) {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    dispatch(userLogin(user));

    // { success && navigate('/')}
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-blue-100 w-[100%] h-[100%] ">
      <LoginLogo />
      <div className="overflow-y-auto w-[600px] h-[600px] mx-auto mb-6 flex flex-col bg-white rounded-l-3xl">
        <div className="flex flex-col mt-[20%] ml-10">
          <h1 className="text-5xl font-bold">Hello</h1>
          <h1 className="text-2xl mt-5">
            To start please log in using the options below
          </h1>
        </div>

        <div className="flex flex-col ml-10 mt-5 ">
          <form onSubmit={handleSubmit}>
            <label data-testid="email-label" htmlFor="email"></label>
            <input
              type="email"
              className="w-[90%] border p-3 border-gray-600 rounded-xl mb-6"
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
              data-testid="email-input"
            />
            <label data-testid="pwd-label" htmlFor="password">
              {" "}
            </label>

            <input
              data-testid="pwd-input"
              type="password"
              name="password"
              className="w-[90%] border p-3 border-gray-600 mb-6 rounded-xl focus:border-green-400"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <Link to="/sub">
              <button
                data-testid="login-btn"
                type="submit"
                className="w-[90%] cursor-pointer p-3 bg-[#0292b3] rounded-xl text-white mb-6 hover:cursor-pointer"
              >
                Login
              </button>
            </Link>
          </form>

          <div className="flex flex-row justify-center">
            <Link to="" className="underline ">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-row items-center justify-start mt-4 mb-4 gap-3">
            <div className="w-[40%]">
              <hr />
            </div>
            <div className="w-[5%]">
              <p>Or</p>
            </div>
            <div className="w-[40%]">
              <hr />
            </div>
          </div>
          <form action="">
            <button className="w-[90%] flex flex-col items-center border p-3 border-green-600 mb-6 rounded-xl focus:border-green-400">
              <p className="flex w-1/2 gap-1 flex-row justify-center">
                <FaApple size={25} />
                sign up with Apple
              </p>
            </button>

            <Link
              to="/sub"
              className="w-[90%] flex flex-col items-center border p-3 border-green-600 mb-6 rounded-xl focus:border-green-400"
            >
              <p className="flex w-1/2 gap-1 flex-row justify-center">
                <FcGoogle size={25} />
                sign up with Google
              </p>
            </Link>
          </form>
        </div>
      </div>

      <div className="mt-[5%]">&nbsp;</div>
    </div>
  );
}
