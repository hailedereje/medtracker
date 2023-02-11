import React from "react";

import img2 from "../assets/business2.png";

function BusinessMiddle() {
  return (
    <div className="flex text-white bg-[#091D3E] px-10 py-15 my-15">
      <div className="flex py-20">
        <div className="flex-1">
          <p>
            Safety in everyday life for your employees Help your employee reduce
            the risk of injury and illness with The World Medical Card® Business
            Solutions. This user-controlled medical record is a great tool. If
            you have temporary employees in your company, it is important that
            they can communicate any illnesses, ailments and allergies with you,
            pharmacies and health personnel.
          </p>
          <span className="my-10"> SAFETY </span>
          <p>
            You never know when your employees will need critical medical
            information. The World Medical Card® ensures that it is available
            when it is needed most. Employees post what they think is important
            and relevant to their digital medical profile that they always have
            available, both as an app on the phone and as a physical card.
          </p>
          <p>
            The app also has a one-click call button with their map location
            that is sent to their emergency contacts on record. The World
            Medical Card® is a service that complements health insurance,
            travel/accident insurance, local health and emergency apps.
          </p>
          <button className="rounded-xl font-medium my-10 mx-auto cursor-pointer py-5 px-6 bg-[#33B9CB] text-white">
            claculate price for your business
          </button>
        </div>
        <div className="flex-1 ">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BusinessMiddle;
