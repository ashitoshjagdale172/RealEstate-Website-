import React, { useState } from "react";
import room1 from "../../assets/Images/Room1.png";

import AjitProfile from "../../assets/Images/AjitProfile.jfif";
import OurservicesCompo from "./OurservicesCompo";
const OutServices = () => {
 
  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <div className="text-[18px] font-[600] text-[#ED2027]">OUR SERVICES</div>
        <div className="text-[40px] font-[700] my-[50px]">Recommended For You</div>
        <div className=" justify-center gap-[30px] flex items-center mt-[28px]">
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            View All
          </button>
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            Apartment
          </button>
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            Villa
          </button>
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            Studio
          </button>
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            Home
          </button>
          <button className=" bg-[#EAEAEA] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
            Office
          </button>
        </div>
        <div className=" mx-[160px] my-[50px] flex gap-[26px]">
          <OurservicesCompo />
        </div>
      </div>
    </div>
  );
};

export default OutServices;
