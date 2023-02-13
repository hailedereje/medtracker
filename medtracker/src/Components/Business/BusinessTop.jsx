import React from "react";

import img1 from "../../assets/business1.png";

function TopBusiness() {
  return (
    <div data-testid = "btop" className="flex  px-7 py-3 ">
      <div className="flex-1">
        <img
          className="w-[561px] h-[558px]"
          src={img1}
          alt="Lady and Gentleman"
        />
        <button className="rounded-xl font-medium my-5 mx-auto cursor-pointer py-5 px-6 bg-[#33B9CB] text-white">
          claculate price for your business
        </button>
      </div>
      <div className="flex-1">
        <h1 className="text-5xl mt-3 text-[#091D3E] font-medium font-jost">
          World Medical Card® <br /> Business Solutions
        </h1>
        <h2 className="font-medium text-xl my-2 font-Manrope">
          WORLD MEDICAL CARD® – DEALING WITH RISK{" "}
        </h2>
        <p>
          The World Medical Card provides unique business solutions where
          employees can s afely store their essential health and related
          information to make this available should an emergency situation
          arise. This information can be accessed via an app or physical card
        </p>
        <h2 className="text-md py-2">
          COMMUNICATION PROBLEMS AND LANGUAGE BARRIERS{" "}
        </h2>
        <p className="font-manrope">
          Incorrect or missing information required in an emergency increases
          the risk of wrong treatment being applied and can have severe
          consequences. By carrying the World Medical Card®, your critical
          information will always be available and understood by health
          professionals all over the world. Not having access to correct and
          updated medical information in critical situations results in lost
          time and waste of resources in search, rather than providing required
          treatment. In worst case this can lead to loss of life. Make sure that
          health professionals get the best support to help you!
        </p>
      </div>
    </div>
  );
}

export default TopBusiness;
