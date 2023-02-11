import React from "react";
import img1 from "../assets/business1.png";
import img2 from "../assets/business2.png";
import img3 from "../assets/business3.png";
import img5 from "../assets/business5-bg.png";
import img6 from "../assets/b5.png";

function Business() {
  return (
    <div className="">
      <div className="flex  px-7 py-3 ">
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
            time and waste of resources in search, rather than providing
            required treatment. In worst case this can lead to loss of life.
            Make sure that health professionals get the best support to help
            you!
          </p>
        </div>
      </div>
      <div className="flex text-white bg-[#091D3E] px-10 py-15 my-15">
        <div className="flex py-20">
          <div className="flex-1">
            <p>
              Safety in everyday life for your employees Help your employee
              reduce the risk of injury and illness with The World Medical Card®
              Business Solutions. This user-controlled medical record is a great
              tool. If you have temporary employees in your company, it is
              important that they can communicate any illnesses, ailments and
              allergies with you, pharmacies and health personnel.
            </p>
            <span className="my-10"> SAFETY </span>
            <p>
              You never know when your employees will need critical medical
              information. The World Medical Card® ensures that it is available
              when it is needed most. Employees post what they think is
              important and relevant to their digital medical profile that they
              always have available, both as an app on the phone and as a
              physical card.
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
      <div className="my-20 flex mx-5">
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

            <section className="py-3">You choose what information you want, including:</section>
            <span className="text-[#33B9CB] py-3">
              <section className="py-1">Covid vaccine documentation</section>
              <section className="py-1">Important allergies</section>
              <section className="py-1">Important medications you must have</section>
              <section className="py-1">Contact information for relatives</section>
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
            <img className="mt-[-100px]" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
