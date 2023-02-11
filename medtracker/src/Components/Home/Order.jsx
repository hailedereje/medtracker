import React from "react";
import '../../index.css'
const Order = () => {
  return (
    <div className="max-w-[1200px] m-auto mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-20">
      <div className="p-5 flex flex-col justify-center items-center rounded-md  bg-black/80 text-white space-y-4 shadow-lg hover:bg-black/80 hover:text-white">
        <div>icon</div>
        <div className="font-bold text-2xl">
          <h1 className="mb-5">$1.32 $0.66</h1>
          <h1 className="mb-5">/Member/Month</h1>
          <h1 className="mb-5">Family Safety</h1>
        </div>
        <div className=" orders flex flex-col justify-center">
            <p className="mb-3 font-serif">2 – 8 family members</p>
            <p className="mb-3 font-serif">Own and extended fa</p>
            <p className="mb-3 font-serif">Medical Conditions</p>
            <p className="mb-3 font-serif">Insurance Information</p>
            <p className="mb-3 font-serif"> 20 different languages</p>
            <p className="mb-3 font-serif">Emergency Contacts</p>
            <p className="mb-3 font-serif">Share Health Profile Online</p>
            <p className="mb-3 font-serif"> Donor Information</p>
            <p className="mb-3 font-serif">Covid Vaccine Information</p>
            <p className="mb-3 font-serif"> Printed Cards</p>
            <p className="mb-3 font-serif"> Emergency Codes</p>
            <div>
                <button className="p-[15px] bg-cyan-500/90 w-[10rem] rounded-md mt-6">ORDER NOW</button>
            </div>
        </div>
      </div>
      <div className="flex flex-col items-center rounded-md shadow-md hover:bg-black/80 hover:text-white">
        <div>icon</div>
        <div className="font-bold text-2xl">
          <h1 className="mb-5">$1.32 $0.66</h1>
          <h1 className="mb-5">/Member/Month</h1>
          <h1 className="mb-5">Family Safety</h1>
        </div>
        <div className="flex flex-col justify-center">
        <p className="mb-3 font-serif">2 – 8 family members</p>
            <p className="mb-3 font-serif">Own and extended fa</p>
            <p className="mb-3 font-serif">Medical Conditions</p>
            <p className="mb-3 font-serif">Insurance Information</p>
            <p className="mb-3 font-serif"> 20 different languages</p>
            <p className="mb-3 font-serif">Emergency Contacts</p>
            <p className="mb-3 font-serif">Share Health Profile Online</p>
            <p className="mb-3 font-serif"> Donor Information</p>
            <p className="mb-3 font-serif">Covid Vaccine Information</p>
            <p className="mb-3 font-serif"> Printed Cards</p>
            <p className="mb-3 font-serif"> Emergency Codes</p>
            <div>
                <button className="p-[15px] bg-cyan-500/90 w-[10rem] rounded-md text-white mt-6">ORDER NOW</button>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center shadow-md rounded-md hover:bg-black/80 hover:text-white">
        <div>icon</div>
        <div className="font-bold text-2xl">
          <h1 className="mb-5">$1.32 $0.66</h1>
          <h1 className="mb-5">/Member/Month</h1>
          <h1 className="mb-5">Family Safety</h1>
        </div>
        <div className="">
        <p className="mb-3 font-serif">2 – 8 family members</p>
            <p className="mb-3 font-serif">Own and extended fa</p>
            <p className="mb-3 font-serif">Medical Conditions</p>
            <p className="mb-3 font-serif">Insurance Information</p>
            <p className="mb-3 font-serif"> 20 different languages</p>
            <p className="mb-3 font-serif">Emergency Contacts</p>
            <p className="mb-3 font-serif">Share Health Profile Online</p>
            <p className="mb-3 font-serif"> Donor Information</p>
            <p className="mb-3 font-serif">Covid Vaccine Information</p>
            <p className="mb-3 font-serif"> Printed Cards</p>
            <p className="mb-3 font-serif"> Emergency Codes</p>
            <div>
                <button className="p-[15px] bg-cyan-500/90 w-[10rem] text-white rounded-md mt-6">ORDER NOW</button>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Order;
