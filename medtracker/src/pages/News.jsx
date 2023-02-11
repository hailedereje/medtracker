import React from "react";
import { news } from "../newsData";
function News() {
  return (
    <div>
        <h1 className=" text-[55px] text-[#081e42] font-[600] mx-auto block text-center my-10">News</h1>
      {
        <div className="grid md:grid-cols-3 gap-5 m-10 mt-3">
          {news.map((nws, idx) => (
            <div key={idx} className="rounded-lg shadow-xxl border basis-[30%] flex-wrap box-border border-[#dae4eb] p-3 shadow-xl cursor-pointer">
              <img src={nws.img} className="object-cover" alt="" />
              <h1 className="font-md my-2 text-[#0292b3]">{nws.title}</h1>
              <h1 className="text-[#777] ">{nws.disc}</h1>
              <div className="text-red-500 font-[14px] Font-Manrope mt-5 ">Read More...</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default News;
