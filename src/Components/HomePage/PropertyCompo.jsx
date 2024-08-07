import React from 'react'

const PropertyCompo = (props) => {
  return (
    <div>
      <div className=" flex items-center justify-between bg-[#F1F1F1] rounded-[20px]">
            <div className="h-[80px] w-[80px] rounded-[50px] flex justify-center items-center bg-[#ffffff] my-[14px] ml-[14px]">
              <img src={props.image} alt="" className=" h-[40px]" />
            </div>
            <div className="ml-[23px] mr-[40px] ">
              <div className="text-[14px] font-[600] mb-[8px] ">{props.Heading}</div>
              <div className="text-[14px] font-[600] text-[#707070]">({props.number} Properties)</div>
            </div>
          </div>
    </div>
  )
}

export default PropertyCompo
