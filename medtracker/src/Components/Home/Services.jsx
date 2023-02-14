import React from "react";
import { serviceImages, services } from "../../data";

const Services = () => {
  return (
    <div data-testid="services" className="bg-cyan-500 mt-[10rem]">
      <div className="p-20">
        <div className="flex justify-center  gap-20">
          {services.map((service) => (
            <div key = {service.title} className="font-sans flex flex-col  items-center">
              <h1 className="text-center mb-5 text-white text-5xl">
                {service.icon}
              </h1>
              <h1 className="text-center mb-5 text-white text-2xl">
                {" "}
                {service.title}
              </h1>
              <p className="text-center mb-5 text-white">{service.p1}</p>
              <p className="text-center mb-5 text-white">{service.p2}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black flex justify-between items-center">
        {serviceImages.map((img) => (
          <div key={img}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
