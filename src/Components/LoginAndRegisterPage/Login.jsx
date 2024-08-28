import React from "react";
import Google from "../../assets/Images/google.png"
import Facebook from "../../assets/Images/Facebook.png"
import { Outlet } from "react-router";
const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#3c3c3cb7]">
        <div className=" flex flex-col bg-[#F1F1F1]   px-[24px] py-[24px] rounded-[20px]">
          <div className=" flex gap-[20px] mb-[30px]">
            <button className="h-[37px] w-[204px] text-[#ED2027] text-[14px] font-[600] rounded-[10px] bg-[#ffffff] hover:bg-[#ED2027] hover:text-[#ffffff] border-[#ED2027] border-[1px] ">
              Login
            </button>
          Link<button className="h-[37px] w-[204px] text-[#ED2027] text-[14px] font-[600] rounded-[10px] bg-[#ffffff] hover:bg-[#ED2027] hover:text-[#ffffff] border-[#ED2027] border-[1px] ">
              Register
            </button>
            <Outlet/>
          </div>
          <div className=" flex flex-col gap-[12px]">
            <div className=" flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[14px] font-[500]">
                Enter your email address
              </label>
              <input
                className="text-[16px] font-[400] w-[100%] py-[12px] pl-[16px] text-[#707070] rounded-[10px]"
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
              />
            </div>
            <div className=" flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[14px] font-[500]">
                Enter your password
              </label>
              <input
                className="text-[16px] font-[400] w-[100%] py-[12px] pl-[16px] text-[#707070] rounded-[10px] "
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div>
            <button className="text-[16px] font-[600] px-[193px] py-[8px] bg-[#ED2027] text-[#ffffff] rounded-[10px] mt-[24px] mb-[15px]">
              Login
            </button>
          </div>

          <div className="text-[14px] font-[400] ml-[310px] my-[15px] text-[#707070]">
            {" "}
            Forgot Password?
          </div>
          <div className=" flex flex-col gap-[15px]">
            <button className="flex items-center gap-[8px] justify-center w-[100%] bg-[#ffffff] py-[14px] rounded-[10px] text-[#3E3E3E] text-[16px] font-[400]"><img src={Google} alt="" className="h-[20px] inline"/>Sign up with Google</button>
            <button className="flex items-center gap-[2px] justify-center w-[100%] bg-[#ffffff] py-[14px] rounded-[10px] text-[#3E3E3E] text-[16px] font-[400]"><img src={Facebook} alt="" className="h-[22px] inline"/>Sign up with Facebook</button>
          </div>
          <div className="text-[14px] font-[400] text-center mt-[12px]">Don’t have an account?<span className="text-[#ED2027]">Register now</span> </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
