import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

function Popup() {
  return (
    <div>
    <div className="flex flex-col gap-3 ml-10">
      <section className="flex gap-5">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <h1 className="font-light">My profile</h1>
      </section>
      <section className="flex justify-between">
        <div>
          <h1 className="font-[30px]">apphuset runar </h1>
          <p className="text-[#718096]"> monday</p>
        </div>
        <div>
          <>
            <button className="rounded-lg mr-2 flex gap-1 px-3 py-1 border border-[#4dd7f9] text-[#4dd7f9]">
              <MdModeEditOutline />
              Edit{" "}
            </button>
          </>
        </div>
      </section>
      <section>
        <h1 className="font-bold">Nationality</h1>
        <p className="text-[#263238]"> Norwegian</p>
      </section>
      <section>
        <h1 className="font-bold">Telephone</h1>
        <p className="text-[#263238]"> 98765432</p>
      </section>

      <section>
        <h1 className="font-bold">Postal Address</h1>

        <p className="text-[#263238]">Alvøveien 130</p>
        <p className="text-[#263238]">Godvik</p>
        <p className="text-[#263238]">5179</p>
        <p className="text-[#263238]">NO</p>
      </section>

      <section className="flex gap-5">
        <div>
          <h1 className="font-bold">Travel Insurance</h1>
          <p className="text-[#263238]"> Travel</p>
        </div>
        <div>
          <h1 className="font-bold">Policy Number</h1>
          <p className="text-[#263238]"> string</p>
        </div>
      </section>

      <section>
        <h1 className="font-bold">Emergency phone</h1>
        <p className="text-[#263238]"> string</p>
      </section>
      <section>
        <h1 className="font-bold">Contact persons in case of emergency</h1>

        <p className="text-[#263238]">dorre dorre</p>
        <p className="text-[#263238]">5555558</p>
        <p className="text-[#263238]">dyuwj</p>
      </section>
      <section>
        <h1 className="font-bold">Other information</h1>

        <p className="text-[#263238]">
          test other g g. G fggggg t. G t t t t t t t.
        </p>
        <p className="text-[#263238]">
          T t t t t t t t t. T t t t t t tvhbbbooo
        </p>
      </section>
    </div>
    </div>
  );
}

export default Popup;
