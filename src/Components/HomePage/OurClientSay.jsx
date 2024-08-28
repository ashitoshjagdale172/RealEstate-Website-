import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import KirtiAgarwal from "../../assets/Images/KirtiAgarwal.jfif";
import manKirti from "../../assets/Images/mankirti.jfif";
import OurClientSayCompo from "./OurClientSayCompo";
const OurClientSay = () => {
 
  return (
    <div>
      <div className="pb-[50px] pt-[50px] flex flex-col items-center justify-center bg-[#F1F1F1] gap-[40px]">
        <div className="text-[18px] font-[600] text-[#ED2027]">
          OUR BLOG AND ARTICLES
        </div>
        <div className="text-[40px] font-[700] ">
          What Our Client Says
        </div>
        <div className=" flex gap-[26px]">
        <OurClientSayCompo images={manKirti} name="Kartik Agarwal" profile="Project Manager" text="My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."/>
        <OurClientSayCompo images={KirtiAgarwal} name="Kirti Agarwal" profile="Project Manager" text="I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision."/>
         
          <div></div>
          
        </div>
        <div className="flex items-center justify-center  gap-[26px]  w-full">
          <button  className="flex items-center justify-center px-3 py-1 hover:bg-[#ED2027] hover:text-[#ffffff] bg-[#ffffff] shadow-[4px_4px_4px_3px_rgba(0,0,0,0.3)] text-[21px] font-[700] rounded ">&lt;</button>
          <button  className="flex items-center justify-center px-3 py-1 hover:bg-[#ED2027] hover:text-[#ffffff] bg-[#ffffff] shadow-[4px_4px_4px_3px_rgba(0,0,0,0.3)] text-[21px] font-[700] rounded ">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OurClientSay;
