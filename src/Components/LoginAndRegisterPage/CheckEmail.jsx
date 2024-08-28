import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
const CheckEmail = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#3c3c3cb7]">
        <div className=" flex flex-col justify-center items-center bg-[#F1F1F1] px-[50px] py-[50px] rounded-[20px] gap-[22px] text-center">
            <div><IoMailUnreadOutline  className="h-[48px] w-[48px] text-[#ED2027]"/>
            </div>
            <div className="text-[24px] font-[600]">Check your Email</div>
            <div className="text-[#757575] text-[14px] font-[500] ">We’ve send instructions on hoe to reset <br />your password to <span className=" text-[#000000]">sourabhjamdade5@gmail.com</span> </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
