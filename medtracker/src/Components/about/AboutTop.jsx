import React from "react";


import img1 from "../../assets/about/about1.png"
import img2 from "../../assets/about/about2.png"
import img3 from "../../assets/about/about3.jpg"

function AboutTop() {
  return (
    <div data-testid="atop">
      <div className="mt-40 mb-40 grid sm:grid-cols-2">
        <div className="mb-20">
          <div className="flex-1 ml-10 mr-10 mb-10">
            <img className="w-[550px] h-[600px]" src={img1} alt="" />
          </div>
          <div className="text-center">
            <button className="bg-[#33B9CB] text-white font-bold pl-8 pr-8 pt-4 pb-4 rounded-md ">
              Order card
            </button>
          </div>
        </div>
        <div className="ml-5">
          <h1 className="text-[#33B9CB] mb-3 ">
            ABOUT THE WORLD MEDICAL CARD ®
          </h1>
          <p className="font-bold text-4xl mb-10 ">
            What is The World Medical Card.
          </p>
          <p className="text-lg">
            The World Medical Card® is a subscription service designed to
            provide you with a safer everyday life, and make health
            professionals able to support you fast and accurate should you find
            yourself in a situation where it’s required. You will have your own
            personal profile which can be accessed via app or browser. Enter
            your critical health information and keep it updated. You can chose
            to share your profile with relatives, travel partner or others you
            trust, so that they can be able to provide you with first line of
            support. Your medical information is coded according to World Health
            Organizations global standards (ICD-10, ATC) to ensure that your
            condition and requirement is understood by health professionals and
            pharmaceutical personnel all over the world. There is a built in
            translation function for 4 languages which will ease communication
            in relevant local terms. The World Medical Card makes it easy for
            health professionals to support you when needed.
          </p>
        </div>
      </div>
      <div className="bg-[#33B9CB] pb-20 pt-20">
        <p className="text-center ml-10 mr-10 text-lg text-white flex justify-center">
          “We help people get fast and safe medical treatment by giving them an
          international health card with codes that can be read by doctors all
          over the world. In this way, we also help the doctors who treat the
          patient. ”
        </p>
        <div className="">
          <div className="flex justify-center mt-10">
            <img className="mb-10 " src={img2} alt="" />
          </div>
          <div className="text-center ml-10 mr-10">
            <p className="flex justify-center text-3xl font-bold text-white ">
              Professor Michael Nobel
            </p>
            <p className="flex justify-center text-2xl text-gray-900 ">
              PhD, Chairman of the Board of WMC Holding
            </p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 mt-10 mb-20">
        <div className="flex-1 ml-10 mr-10">
          <img className="" src={img3} alt="" />
        </div>
        <div className="ml-5 mr-10">
          <h1 className="font-bold text-3xl mb-10 ">
            The World Medical Card® background
          </h1>
          <div className="text-[#33B9CB] text-2xl">
            <p className="mb-10">
              The Norwegian/Swiss company World Medical Center is behind the
              work on the development of this international emergency card.
            </p>
            <p className="mb-10">
              World Medical Center put together an outstanding team of
              experienced doctors in collaboration with faculty at the
              University of Bergen and the result was the World Medical Card®.
            </p>
            <p className="mb-10">
              It’s now possible to always have important medical information at
              hand. The World Medical Card® makes it easy to communicate that
              information to medical personnel wherever you are in the world.
              This service is also on your mobile phone, online browser and as a
              personal physical card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTop;
