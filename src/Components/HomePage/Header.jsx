import React from "react";
import bg from "../../assets/Images/bgHome.jfif";
import DownArrow from "../../assets/Images/DownArrow.png";
import tune from "../../assets/Images/tune.png";
const Header = () => {
  return (
    <div>
      <div>
        <div className=" h-[100vh] w-[100%] bg-[#17131392] -Z-20">
          <img
            src={bg}
            alt=""
            className="mt-[-150px] -z-20 h-[100vh] w-[100%] relative"
          />

          <div className="mt-[-500px] mx-[200px] absolute flex flex-col items-center justify-center text-center -Z-20">
            <div className=" text-[#ffffff] text-[58px] font-[600]">
              Find the Perfect Place <br /> to Call Home
            </div>
            <div className=" text-[#ffffff] text-[14px] font-[500]">
              Explore a wide range of properties in the most desirable
              locations. Whether you’re looking for a cozy apartment, <br /> a
              spacious family home, or a luxurious estate, we have listings to
              suit every lifestyle and budget.
            </div>
            <div className=" justify-evenly gap-[32px] flex items-center mt-[28px]">
              <button className=" bg-[#ffffff] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
                Rent
              </button>
              <button className=" bg-[#ffffff] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
                Buy
              </button>
              <button className=" bg-[#ffffff] hover:bg-[#ED2027] rounded-[15px] font-[600] text-[18px] hover:text-[#ffffff] px-[18px] py-[6px]">
                Sell
              </button>
            </div>
            <div className=" gap-[57px] flex items-center rounded-[5px] justify-center bg-[#ffffff] px-[16px] py-[16px] mt-[40px]">
              <div className=" border-[#E4E4E4] border-r-2 text-left">
                <div className="text-[12px] font-[600]">KEYWORD</div>
                <div className="text-[#B0B0B0] text-[12px] font-[600] mt-[14px] py-[4px] pr-[110px]">
                  Search Keyword
                </div>
              </div>
              <div className=" border-[#E4E4E4] border-r-2 text-left">
                <div className="text-[12px] font-[600]">LOCATION</div>
                <div className="text-[#B0B0B0] text-[12px] font-[600] mt-[14px] py-[4px] pr-[110px]">
                  Search Location
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <div className=" text-left">
                  <div className="text-[12px] font-[600]">Type</div>
                  <div className="text-[12px] font-[600] mt-[14px] py-[4px] pr-[110px]">
                    All
                  </div>
                </div>
                <div>
                  <img src={DownArrow} alt="" />
                </div>
              </div>
              <div className=" tems-center flex gap-[10px]">
                <div>
                  <img src={tune} alt="" />
                </div>
                <div className="text-[14px] font-[600]">Advanced</div>
              </div>
              <div>
                <button className="px-[38px] py-[18px] rounded-[10px] bg-[#ED2027] text-[#ffffff] font-[700]">
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1F1] flex justify-center items-center py-[40px] gap-[116px]">
          <div className=" flex gap-2">
            <div className="text-[40px] font-[600] text-[#ED2027]">300+</div>
            <div className=" text-[20px] font-[600]">Happy <br /> Clients</div>
          </div>
          <div className="flex gap-2">
            <div className="text-[40px] font-[600] text-[#ED2027]">1K+</div>
            <div className=" text-[20px] font-[600]">Property <br /> Ready</div>
          </div>
          <div className="flex gap-2">
            <div className="text-[40px] font-[600] text-[#ED2027]">80+</div>
            <div className=" text-[20px] font-[600]">Completed <br />Agents</div>
          </div>
          <div className="flex gap-2">
            <div className="text-[40px] font-[600] text-[#ED2027]">60%</div>
            <div className=" text-[20px] font-[600]">Years <br />Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
