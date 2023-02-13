import React from "react";
import hero_image from '../../assets/home/heroimg1.jpg'


const Hero = () => {
  return (
    <div 
    data-testid="hero"
    style={{ backgroundImage: `url(${hero_image})` }}
    className="flex justify-center items-center h-[700px] ">
      <div className="w-[1200px] relative flex flex-col justify-start m-auto">
        <div>
          <div className="bg-cyan-500/70 w-[50%] p-3 rounded-md shadow-md ">
            <h1 className="font-sans-serif text-[35px]  text-white font-bold">A unique technology for safe and correct medical treatment</h1>
          </div>
          <button className="p-[15px] mt-10 text-white w-[10rem] rounded-md bg-[#A81515] text-[16px]">Register Now </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
