import React from "react";
import { BiArrowBack } from "react-icons/bi";
import viewimg from '../../assets/home/influenza.png'

const ImageViewer = ( { setView } ) => {

  return (
    <div
      className={`w-[100vw] bg-black/40 z-20  fixed top-0 h-screen flex justify-end  ease-in-out duration-500`}
    >
      <div className="bg-white w-[35vw] p-3">
        <div className="flex my-5">
        <BiArrowBack size={25} className="text-blue-500 cursor-pointer mr-10" onClick={() => setView(false)}/>
            <h1 className="text-xl">view document</h1>
        </div>
        <div className="w-full h-[90%] overflow-scroll">
            <img className="w-full h-[95%] object-cover"   src={viewimg} alt="viewimg" />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;