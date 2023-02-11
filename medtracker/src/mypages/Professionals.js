import React from "react";
import img1 from "../assets/professionals/proffesionals1.png"
import img2 from "../assets/professionals/proffesionals2.png"
import img3 from "../assets/b5.png"

function Professionals(params) {
    return(
        <div className="">
            <div className="text-center">
                <p className="font-bold text-3xl mb-5">
                    How The World Medical Card® can be used by 
                    Health Professionals
                </p>
                <p className="font-bold text-3xl text-gray-500 mb-5">
                    Get access to patient health information instantly 
                    with The World Medical Card®
                </p>
                <p className="text-md mb-5">
                    The World Medical Card® is an unique solution for Health 
                    Professionals to help their patients. Here patients can 
                    safely store their essential health and related information. 
                    And make this available should an emergency situation arise. 
                    The information can be accessed via an app or physical card. 
                    Our solution is already used in 27 countries.
                </p>
            </div>
            <div className="mb-20 pb-10 text-center">
                <button className="bg-[#A81515] rounded-md pl-8 pr-8 pt-4 pb-4 text-white font-bold">
                    Emergency Code Access
                </button>
            </div>
            <div className="bg-[#091D3E] grid sm:grid-cols-2 mb-40 pb-40 pt-40">
                <div className="flex-1 ml-20 mr-20">
                    <img className="w-[550px] h-[600px]" src={img1} alt="" />
                </div>  
                <div className="bg-blue-900 p-5 mt-5 text-white">
                    <h1 className="font-bold text-4xl mt-20 mb-5">
                        Health Professionals
                    </h1>
                    <p className="mb-5">
                        Has a patient given you his or her World Medical Card®? Or
                        has an unconscious person who carries this card been brought
                        to your practice? Health Professionals can use the Emergency 
                        Log-in code found on the WMC card. If you have not already 
                        done so, view the card and check the medical information printed. 
                        If needed, log in using the member ID and password provided. 
                    </p>
                    <p className="mb-20">
                        When logged in, you will find all health information and other data 
                        the patient has chosen to register. This could be their diagnoses, 
                        medications or allergies. You can also find their next of kin’s 
                        contact information as well as other relevant documents, including x-rays. 
                        Our goal is to help you help the patient.
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2">
                <div className="flex-1 ml-20 mr-20">
                    <img className="w-[550px] h-[600px]" src={img2} alt="" />
                </div>
                <div className="mb-40">
                    <h1 className="font-bold text-4xl pt-20 mb-5">
                        Health Institutions
                    </h1>
                    <p className="text-md">
                        Health Institutions WMC Technologies provides retirement homes and 
                        health institutions a product that makes their daily lives easier and safer.
                        With our group subscription, we provide a solution where people and 
                        patients can easily be added to the subscription. Individuals can maintain 
                        their medical records by signing into the web or app. Our goal is to make the 
                        everyday life easier for the employees and safer for the patients.
                    </p>
                </div>
            </div>
            <div className="flex mt-20 bg-[#c0bdbd]">
                <div className="flex-1 my-auto text-xl font-[400]">
                    Learn More About The World Medical Card® And How To Use It
                </div>
                <div className="flex-1 m-auto ">
                    <button className="bg-[#a81515]  text-white p-3 item-center rounded-md">
                    Watch Video
                    </button>
                </div>
                <div className="flex-1">
                    <img className="mt-[-100px]" src={img3} alt="" />
                </div>
            </div>
        </div>
    );
    
}
export default Professionals