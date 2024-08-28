import React from "react";

const ForgetPassword = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#3c3c3cb7]">
        <div className=" flex flex-col bg-[#F1F1F1]   px-[24px] py-[24px] gap-[24px] rounded-[20px] ">
            <div className="text-[24px] font-[600]">Forget your password</div>
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
            <div>
            <button className="text-[16px] font-[600] px-[193px] py-[8px] bg-[#ED2027] text-[#ffffff] rounded-[10px] mt-[24px] mb-[15px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
