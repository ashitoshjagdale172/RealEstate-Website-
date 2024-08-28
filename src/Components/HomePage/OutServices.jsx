import React from "react";

import API from "./OurService.json"
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
        <div className=" mx-[160px] my-[50px] flex flex-wrap gap-[26px]">
        {API.length > 0 ? (
            API.map((service, index) => (
              <OurservicesCompo
                key={index}
                room={service.Room}
                rent={service.Rent}
                heading={service.Heading}
                location={service.Location}
                beds={service.Bed}
                bathrooms={service.Bathroom}
                parking={service.CarParking}
                ProfilePic={service.ProfileImage}
                name={service.Name}
                date={service.Date}
              />
            ))
          ) : (
            <div>Loading services...</div>
          )}
         
        </div>
        <div>
          <button className="  mb-[100px] text-[#ffffff] text-[18px] font-[500] px-[60px] py-[13px] bg-[#ED2027] rounded-[10px]">View All Properties</button>
        </div>
      </div>
    </div>
  );
};

export default OutServices;
