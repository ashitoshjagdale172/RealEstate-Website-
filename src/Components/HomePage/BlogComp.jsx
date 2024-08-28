import React from 'react'

const BlogComp = (props) => {
  return (
    <div>
      <div className="flex flex-col  rounded-[10px] w-[356px] shadow-[0px_4px_22px_0px_rgba(0,0,0,0.34)]">
            <div>
              <img
                src={props.images}
                alt=""
                className="w-[356px] h-[238px] rounded-t-[10px]"
              />
            </div>
            <div className=" flex flex-col px-[24px] py-[16px] gap-[16px]">
              <div className="font-[600] ">
                {props.heading}
              </div>
              <div className=" flex gap-[16px]">
                <div className="text-[14px] text-[#707070] font-[400] bg-[#F0F0F0] px-[10px] py-[6px] rounded-[5px]" >{props.date}</div>
                <div className="text-[14px] text-[#707070] font-[400] bg-[#F0F0F0] px-[10px] py-[6px] rounded-[5px]" >{props.owner}</div>
              </div>
              <div className="font-[400] text-[#6F6F6F] leading-6">
                {props.text}
              </div>
            </div>
          </div>
    </div>
  )
}

export default BlogComp
