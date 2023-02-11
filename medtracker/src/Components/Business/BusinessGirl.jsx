import React from 'react'
import img6 from "../../assets/b5.png";

function BusinessGirl() {
  return (
    <div className="flex mt-20 bg-[#fff7f1] mx-10 ">
          <div className="flex-1 my-auto text-xl mx-8 font-[400] ">
            Learn More About The World Medical Card® And How To Use It
          </div>
          <div className="flex-1 m-auto ">
            <button className="bg-[#a81515] shadow-md  text-white p-3 item-center rounded-md">
              Watch Video
            </button>
          </div>

          <div className="flex-1">
            <img className="mt-[-100px]" src={img6} alt="" />
          </div>
        </div>
  )
}

export default BusinessGirl