import React from "react";
import brand1 from "../assets/brand/brand1.svg";
import brand2 from "../assets/brand/brand2.svg";
import brand3 from "../assets/brand/brand3.svg";
import brand4 from "../assets/brand/brand4.svg";
import brand5 from "../assets/brand/brand5.svg";

const BrandLogo = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container py-12">
        <h1 data-aos="fade-up" className="text-center">
          Powering next-gen companies
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32"
        >
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
