import { useState,React } from "react";
import { FaBookMedical } from "react-icons/fa";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineTranslation,
} from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import { HiShare } from "react-icons/hi";
import { MdDelete } from "react-icons/md";


const Medicine = () => {
  const [show, setShow] = useState(false);

  return (
    <div data-testid="medicine" className={`bg-white p-[10px] rounded-[20px] cursor-pointer`}>
      <div
        className="flex p-[10px] justify-between"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center cursor-pointer">
          <div className="mr-[3rem]">
            <FaBookMedical size={40} className="text-black/30"/>
          </div>
          <div>
            <h1 className="text-xl">Medicine</h1>
            <p className="font-thin ">6 items</p>
          </div>
        </div>
        <div className="flex items-center">
          {show ? <AiOutlineUp size={20} className="text-black/30"/> : <AiOutlineDown size={20} className="text-black/30"/>}
        </div>
      </div>

      <div
        className={`mt-[10px] ${
          show ? "h-[100%] transition-transform" : "hidden transition-transform"
        }`}
      >
        <hr className="w-[95%] text-center m-auto" />
        <div className="flex justify-between items-center mx-[1rem] mt-4 hover:bg-black/10 rounded-md cursor-pointer px-2">
          <p className="my-2 px-[1rem] text-black/50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <MdDelete size={20} className="hover:hidden" />
        </div>
      </div>
      <div className={`flex mt-2 ml-4 ${!show && "hidden"}`}>
        <button className="ml-4 border p-[10px] rounded-[20px] flex items-center">
          <IoAddSharp className="mr-2" /> Add
        </button>
        <button className="ml-4 border p-[10px] rounded-[20px] flex items-center">
          <AiOutlineTranslation className="mr-3" /> Translation
        </button>
        <button className="ml-4 border p-[10px] rounded-[20px] flex items-center">
          <HiShare className="mr-3" /> share
        </button>
      </div>
    </div>
  );
};

export default Medicine;
