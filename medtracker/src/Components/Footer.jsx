import React from "react";

function Footer() {
  return (
    <div className="bg-[#1e1b2e] px-10 text-white">
      <div className="flex py-5">
        <div className="flex-1 ">
          <p className="mb-3 text-[16px] font-light text-[#ffffff80]"> OUR MISSION</p>
          <p className="py-6 text-[#cecaca]1">
            Facilitate access to correct medical <br /> information to avoid:
          </p>
          <ul className="p-3 text-[#cecaca]">
            <li>Wrong treatment</li>
            <li>Wrong medication</li>
            <li>Loss of life</li>
          </ul>
        </div>
        <div className="flex-1 ">
          <h2 className="mb-3  text-[#ffffff80]"> QUICK LINKS</h2>
          <div className="flex flex-col py-5 text-[#cecaca]">
            <span>Home</span>
            <span>Business</span>
            <span>Health professionals</span>
            <span>About</span>
            <span>News</span>
          </div>
        </div>
        <div className="flex-1 ">
          <h2 className="mb-3 text-[#ffffff80]"> CUSTOMER SERVICE </h2>
          <div className="flex flex-col font-light text-[#cecaca]">
            <span>WMC Technologies AS</span>
            <span>Gamlehaugvegen 20</span>
            <span>5230 Paradis</span>
            <span>E-mail: post@wmc-card.no</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="flex-1 text-[#cecaca]">
          2021 © WMC Technologies AS. ALL Rights Reserved. | Terms | Privacy |
          Security World Medical Card is a registered trademark of World Medical
          Center Holding S.A. The technology that is used by World Medical Card
          onWeb/onCard/onMobile is protected by patents
        </div>
        <div className="flex-1 text-[#cecaca]">
          Center Holding S.A. The technology that is used by World Medical Card
                        
        </div>
      </div>
    </div>
  );
}

export default Footer;
