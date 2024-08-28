import React from 'react'
import { FaStar } from "react-icons/fa";
const OurClientSayCompo = (props) => {
  return (
    <div>
      <div className=" flex flex-col bg-[#ffffff] px-[30px] py-[30px] rounded-[20px] gap-[30px]">
            <div className=" flex gap-[27px]">
              <div>
                <img
                  src={props.images}
                  alt=""
                  className="w-[81px] h-[83px] rounded-[16px]"
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="text-[28px] font-[700] text-[#3C4852]">
                  {props.name}
                </div>
                <div className="text-[18px] font-[500] text-[#4B4F58]">
                  {props.profile}
                </div>
              </div>
            </div>
            <div className="w-[483px] text-[18px] fomt-[500] text-[#4B4F58]">
             {props.text}
            </div>
            <div className="flex text-[#F7AE00] text-[28px]">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    
            </div>
          </div>
    </div>
  )
}

export default OurClientSayCompo
