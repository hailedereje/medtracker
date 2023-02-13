import React from "react";

import img3 from "../../assets/business3.png";

import img5 from "../../assets/business5-bg.png";
import BusinessGirl from "./BusinessGirl";

function BusinessBottom() {
  return (
    <>
      <div data-testid = "bbottom" className="my-20 flex mx-5">
        <div className="flex-1">
          <img src={img3} alt="" />
        </div>
        <div className="flex-1 mx-5 pt-6">
          <h1 className=" text-4xl font-bold"> It’s easy to be prepared</h1>
          <p>
            <br />
            <span className="text-lg">
              The World Medical Card® is always available via mobile, PC or
              card.{" "}
            </span>{" "}
            <br />
            <br />
            The World Medical Card® is easy to share. Your employees do not have
            to worry about remember the medications they need or what treatments
            may be harmful to them. If they have had e.g. a shoulder operation
            in their home country, it can be documented so that health all
            personnel all over the world will and understand know this. All
            current insurances and treatment agreements can be uploaded.
            Employees food allergies are translated so they are completely
            confident that everyone understands what allergies they have.
            Gluten, nut allergies, and other less common allergies are easily
            translated. It is easy to register and keep relevant information up
            to date – all information is gathered in one place. Let The World
            Medical Card® Business Solutions help your employees.
          </p>
          <h2 className="font-md my-4 text-xl"> Understanding </h2>
          <p>
            Medical needs are understood, anywhere, around the clock. The World
            Health Organization coding (IDC-10 and ATC) ensures that anyone in
            dialogue with a foreign-language doctor will be completely confident
            that the doctor will understand. COVID-19 encoding is included and
            Pharmacists will immediately understand which active ingredients /
            medicines provide palliative and necessary treatment. Already in use
            in 27 countries. Translation function into 20 languages, to ease
            communication in relevant local language beyond medical
            professionals.
          </p>
          <button className="rounded-md font-medium my-5 mx-auto cursor-pointer py-4 px-5 bg-[#33B9CB] text-white">
            claculate price for your business
          </button>
        </div>
      </div>
      <div className="items-center">
        <div className="w-[100%] bg-black/10 absolute h-[120%]">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={img5}
            alt="loginbg"
          />
        </div>
        <div className=" py-9 items-center">
          <p className="items-center px-[25%] py-3 ">
            <section className="text-[#33B9CB] py-3">
              Smart. Easy. Safe. Secure.
            </section>
            <section className="text-4xl font-bold py-3">
              8 REASONS TO ORDER WORLD MEDICAL CARD®
            </section>
            <section className="py-3">
              World Medical Card® is always available via app, PC or a physical
              card. You can upload your personal medical information, coded so
              that you are understood by healthcare professionals – anywhere in
              the world, around the clock. Let your employees try World Medical
              Card Business Solutions
            </section>

            <section className="py-3">
              You choose what information you want, including:
            </section>
            <span className="text-[#33B9CB] py-3">
              <section className="py-1">Covid vaccine documentation</section>
              <section className="py-1">Important allergies</section>
              <section className="py-1">
                Important medications you must have
              </section>
              <section className="py-1">
                Contact information for relatives
              </section>
              <section className="py-1">Emergency button for relatives</section>
              <section className="py-1">Insurance information</section>
              <section className="py-1">Donor information</section>

              <section>Optical prescriptions</section>
            </span>
            <button className="rounded-md font-medium my-5 mx-auto cursor-pointer py-4 px-5 bg-[#33B9CB] text-white">
              claculate price for your business
            </button>
          </p>
        </div>
        <BusinessGirl />
      </div>
    </>
  );
}

export default BusinessBottom;
