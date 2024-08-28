import React from 'react'

const WhatWeDoCompo = (props) => {
  return (
    <div>
      <div className='mb-[50px] px-[30px] py-[30px] justify-center flex-col flex items-center rounded-[20px] bg-[#ffffff] gap-[24px]'>
                <div><img src={props.image} alt="" className='w-[70px] h-[70px]'/></div>
                <div className='text-[18px] font-[600]'>{props.Heading}</div>
                <div className=' w-[260px] text-[14px] text-center font-[400] text-[#707070] '>{props.text}</div>
                <div><button className='px-[40px] py-[13px]  bg-[#ED2027] text-[180x] font-[500] text-[#ffffff] rounded-[10px]'>Learn More</button></div>
            </div>
    </div>
  )
}

export default WhatWeDoCompo
