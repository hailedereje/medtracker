import React from "react";
import { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import {
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

import {IoMdDownload} from 'react-icons/io'
import { IoAddSharp,IoDocumentText } from "react-icons/io5";
import { HiOutlineEye} from "react-icons/hi";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const Document = ( { setSide,setView }) => {
  const [show, setShow] = useState(false);
 
  return (
    <div className={`bg-white p-[10px] rounded-[20px] cursor-pointer`}>
      <div
        className="flex p-[10px] justify-between"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center cursor-pointer">
          <div className="mr-[3rem]">
            <AiFillFolder size={40} className="text-black/30" />
          </div>
          <div>
            <h1 className="text-xl">Documents</h1>
            <p className="font-thin ">6 items</p>
          </div>
        </div>
        <div className="flex items-center">
          {show ? (
            <AiOutlineUp size={20} className="text-black/30" />
          ) : (
            <AiOutlineDown size={20} className="text-black/30" />
          )}
        </div>
      </div>

      <div
        className={`mt-[10px] ${
          show ? "h-[100%] transition-transform" : "hidden transition-transform"
        }`}
      >
        <hr className="w-[95%] text-center m-auto" />
        <div className="mt-4 px-[20px] flex flex-col">
          <h1 className="text-xl">Living will</h1>
          <div className="flex justify-between items-center hover:bg-black/10 p-2 my-4 rounded-md">
            <div className="flex gap-6">
              <IoDocumentText className="" size={40}/>
              <div>
                <h1 className="font-tick">Lorem ipsum dolor</h1>
                <p className="font-thin ">subtile</p>
              </div>
            </div>
            <div className="flex">
              <HiOutlineEye className="ml-2 text-black/40" onClick={() => setView(true)}/>
              <MdModeEditOutline className="ml-2 text-black/40"/>
              <IoMdDownload className="ml-2 text-black/40"/>
              <MdDelete className="ml-2 text-black/40"/>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex mt-2 ml-4 ${!show && "hidden"}`}>
        <button className="ml-4 border border-blue-500 text-blue-500 p-[10px] rounded-[20px] flex items-center" 
        onClick={() => setSide(true)}>
          <IoAddSharp className="mr-2" /> Add
        </button>
      </div>
    </div>
  );
};

export default Document;
