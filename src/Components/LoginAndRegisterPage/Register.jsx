import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = () => {
    if (!agreed) {
      alert(
        "You must agree to the Terms & Conditions and Privacy Policy to Register"
      );
    } else {
      alert("Register successfully!");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center w-[100%] h-[100vh] bg-[#3c3c3cb7]">
        <div className=" flex flex-col bg-[#F1F1F1]   px-[24px] py-[24px] rounded-[20px] gap-[19px]">
          <div className=" flex gap-[20px] ">
            <button className="h-[37px] w-[204px] text-[#ED2027] text-[14px] font-[600] rounded-[10px] bg-[#ffffff] hover:bg-[#ED2027] hover:text-[#ffffff] border-[#ED2027] border-[1px] ">
              Login
            </button>
            <button className="h-[37px] w-[204px] text-[#ED2027] text-[14px] font-[600] rounded-[10px] bg-[#ffffff] hover:bg-[#ED2027] hover:text-[#ffffff] border-[#ED2027] border-[1px] ">
              Register
            </button>
          </div>
          <div className="w-[100%]">
            <select
              id="role"
              value={role}
              onChange={handleChange}
              className="w-[100%] py-[12px] px-[16px] text-[16px] font-[400] rounded-[10px]"
            >
              <option value="">Owner/Buyer</option>
              <option value="Owner">Owner</option>
              <option value="Buyer">Buyer</option>
            </select>
          </div>
          <div className=" flex flex-col gap-[12px]">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-[12px] pl-[16px] rounded-[10px] text-[#707070] text-[16px] font-[400]"
            />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Mobile Number"
              className="py-[12px] pl-[16px] rounded-[10px] text-[#707070] text-[16px] font-[400]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address "
              className="py-[12px] pl-[16px] rounded-[10px] text-[#707070] text-[16px] font-[400]"
            />
            <input
              type="Password"
              name=""
              id=""
              placeholder="Password"
              className="py-[12px] pl-[16px] rounded-[10px] text-[#707070] text-[16px] font-[400]"
            />
            <input
              type="Password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="py-[12px] pl-[16px] rounded-[10px] text-[#707070] text-[16px] font-[400]"
            />
          </div>
          <div className=" flex items-center gap-[12px]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleCheckboxChange}
              className={`w-[20px] h-[20px] ${ agreed ?  'bg-white' : 'bg-[#ED2027] border-[#ED2027]' }`}
            />
            <label className="text-[#707070] text-[14px] font-[500] ">
              By creating an account, you agree to our <br />
              <a
                href="/terms"
                className="text-[#ED2027] text-[14px] font-[500]"
              >
                
                Terms & Conditions
              </a>
              and
              <a
                href="/privacy"
                className="text-[#ED2027] text-[14px] font-[500]"
              >
               
                Privacy Policy
              </a>
              .
            </label>
            <br />
          </div>
          <div>
               
            <button onClick={handleSubmit} disabled={!agreed} className="text-[#ffffff] py-[8px] w-[100%] flex justify-center items-center bg-[#ED2027] text-[16px] font-[600]">
              Register
            </button>
          </div>
          <div className="text-[14px] font-[400] text-[#7A828A] flex justify-center">Already have an account? <span className="text-[#ED2027]"> &nbsp;Login here</span></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
