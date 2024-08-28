import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
const Footer = () => {
  return (
    <div>
      <div className=" flex px-[31px] flex-col bg-[#161E2D] ">
        <div className=" flex  mt-[60px] justify-between items-center w-[100%]">
          <div className=" text-[30px] font-[700] text-[#ED2027]">
            RealEstate
          </div>
          <div className=" flex items-center gap-[12px] justify-center">
            <div className="text-[14px] font-[600] text-[#ffffff]">
              Follow Us:
            </div>
            <div className="h-[40px] w-[40px] rounded-[50%] bg-[#ffffff1c] text-[18px] text-[#ffffff] flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="h-[40px] w-[40px] rounded-[50%] bg-[#ffffff1c] text-[18px] text-[#ffffff] flex items-center justify-center">
              <FaLinkedinIn />
            </div>
            <div className="h-[40px] w-[40px] rounded-[50%] bg-[#ffffff1c] text-[18px] text-[#ffffff] flex items-center justify-center">
              <FaTwitter />
            </div>
            <div className="h-[40px] w-[40px] rounded-[50%] bg-[#ffffff1c] text-[18px] text-[#ffffff] flex items-center justify-center">
              <RiInstagramFill />
            </div>
          </div>
        </div>
        <div className=" flex  justify-between mt-[70px] mb-[40px]  align-text-top">
          <div className=" flex flex-col gap-[12px] w-[350px]">
            <div className="text-[#A3ABB0]">
              Specializes in providing high-class tours for those in need.
              Contact Us
            </div>
            <div className=" flex gap-[8px] items-center">
              {" "}
              <div className=" text-[15px] text-[#A3ABB0]">
                <FaLocationDot />
              </div>
              <div className="text-[14px] text-[#ffffff] font-[400]">
                Lane No. 3, Balajinagar, Mahadev Nagar, Kharadi
              </div>
            </div>
            <div className=" flex gap-[8px] items-center">
              {" "}
              <div className=" text-[15px] text-[#A3ABB0]">
                <MdWifiCalling3 />
              </div>
              <div className="text-[14px] text-[#ffffff] font-[400]">
                +91 9075326686
              </div>
            </div>
            <div className=" flex gap-[8px] items-center">
              {" "}
              <div className=" text-[15px] text-[#A3ABB0]">
                <IoMailOpenOutline />
              </div>
              <div className="text-[14px] text-[#ffffff] font-[400]">
                realestate@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="text-[#ffffff] text-[16px] font-[700]">
              Categories
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Pricing Plans
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Our Services
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              About Us
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Contact Us
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="text-[#ffffff] text-[16px] font-[700]">
              Our Company
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Property For Sale
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Property For Rent
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Property For Buy
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Our Agents
            </div>
          </div>
          <div className="flex flex-col gap-[9px] w-[355px]">
            <div className="text-[#ffffff] text-[16px] font-[700]">
              Newsletter
            </div>
            <div className="text-[14px] text-[#A3ABB0] font-[400]">
              Your Weekly/Monthly Dose of Knowledge and Inspiration
            </div>
            <div className="flex justify-between items-center text-[14px] text-[#A3ABB0] font-[400]">
              <div className=" flex items-center gap-[9px]">
                <div>
                  <IoMailOpenOutline />
                </div>
                <div className="">Your email address</div>
              </div>
              <div>
                <LuSend />
              </div>
            </div>
          </div>{" "}
        </div>
        <div className=" flex justify-between items-center py-[12px] border-t-[2px] border-[#ffffff1c] text-[14px] text-[#A3ABB0] font-[400]">
          {" "}
          <div>©2024 RealEstate. All Rights Reserved.</div>
          <div className=" flex gap-[19px]">
            {" "}
            <div>Terms Of Services</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
