import React from "react";
import logo from "../assets/home/Logo.png";
import { navbar } from "../data";

const Navbar = () => {
  return (
    <div className="bg-white p-3 h-[7rem] z-40 w-[100%] sticky top-0"> 
      <div className=" p-3 max-w-[1200px] flex justify-between items-center m-auto">
        <div>
          <img className="w-[10rem]" src={logo} alt="logo" />
        </div>
        <div className="flex ml-[2rem]">
          {navbar.map((nav) => (
            <h1 className="ml-[2rem] font-sans-serif text-[15px]">
              {nav.name}
            </h1>
          ))}
        </div>
        <div className="text-white">
          <button className="w-[7rem] rounded-[3px] bg-black p-[10px] mr-[1.5rem]">
            Login
          </button>
          <button className="w-[10rem] rounded-[3px] bg-[#A81515] p-[10px]">
            Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
