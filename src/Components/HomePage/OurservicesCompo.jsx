import { useState } from "react";
import location from "../../assets/Images/location.png";
import {
  MdOutlineBed,
  MdOutlineBathtub,
  MdCarRepair,
  MdOutlinePets,
} from "react-icons/md";
const OurservicesCompo = (props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const calculateDaysAgo = (dateString) => {
    const givenDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today - givenDate;
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysAgo;
  };
  const daysAgo = calculateDaysAgo(props.date);

  return (
    <div>
      <div className="w-[356px] h-[447px] mb-[50px] rounded-[10px] shadow-[0px_4px_22px_0px_rgba(0,0,0,0.24)]">
        <div className="h-[238px] w-[356px] rounded-t-lg ">
          <img
            src={props.room}
            alt=""
            className="h-[238px] w-[356px] rounded-t-lg hover:scale-105"
          />
        </div>
        <div className=" flex flex-col gap-[16px]">
          <div className=" mx-[24px] mt-[16px] flex items-center justify-between">
            <div className=" text-[#ED2027] font-[700]  hover:text-[18px]">
              ₹ {props.rent} per month
            </div>
            <div>
              <button
                onClick={toggleLike}
                className={`focus:outline-none ${
                  liked ? "text-[#ED2027] " : "text-gray-500"
                }`}
              >
                <svg
                  className=" w-[20px] h-[19px] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
                </svg>
              </button>
            </div>
          </div>
          <div className=" mx-[24px]  flex flex-col  ">
            <div className="font-[600] mb-[10px] hover:font-[700] hover:text-[18px]">
              {props.heading}
            </div>
            <div>
              <span>
                <img src={location} alt="" className=" inline text-[#6F6F6F]" />
              </span>
              <span className="text-[#6F6F6F] text-[14px] ml-[8px] hover:font-[500] hover:text-[16px]">
                {props.location}
              </span>
            </div>
          </div>
          <div className="  mx-[24px] items-centern flex gap-[5px]">
            <div className=" gap-[5px] flex ">
              <div className="text-[16px] font-[600] ">{props.beds}</div>
              <div className=" text-[20px] font-[600] text-[#ED2027] ">
                <MdOutlineBed />
              </div>
            </div>
            <div className="h-[20px] w-[2px] mx-[8px] bg-[#8D8D8D]"></div>
            <div className=" gap-[5px] flex">
              <div className="text-[16px] font-[600]">{props.bathrooms}</div>
              <div className=" text-[20px] font-[600] text-[#ED2027]">
                <MdOutlineBathtub />
              </div>
            </div>
            <div className="h-[20px] w-[2px] mx-[8px] bg-[#8D8D8D]"></div>
            <div className=" gap-[5px] flex">
              <div className="text-[16px] font-[600]">{props.parking}</div>
              <div className=" text-[20px] font-[600] text-[#ED2027]">
                <MdCarRepair />
              </div>
            </div>
            <div className="h-[20px] w-[2px] mx-[8px] bg-[#8D8D8D]"></div>
            <div className=" gap-[5px] flex">
              <div className=" text-[20px] font-[600] text-[#ED2027]">
                <MdOutlinePets />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between mx-[24px] mb-[24px]">
            <div className=" flex gap-[11px]">
              <div>
                <img
                  src={props.ProfilePic}
                  alt=""
                  className="w-[26px] h-[26px] rounded-[50%] hover:w-[30px] hover:h-[30px]"
                />
              </div>
              <div className="text-[#6F6F6F] font-[500] hover:font-[700] hover:text-[18px]">{props.name}</div>
            </div>
            <div className="text-[#6F6F6F] text-[14px] font-[400]">
              {daysAgo} Days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurservicesCompo;
