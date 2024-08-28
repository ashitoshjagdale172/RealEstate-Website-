import React from 'react'
import Buy from '../../assets/Images/homeBuy.png'
import Rent from '../../assets/Images/HomeRent.png'
import Sels from '../../assets/Images/HomeSele.png'
import WhatWeDoCompo from './WhatWeDoCompo'
const WhatWeDo = () => {
  return (
    <div>
      <div className=" pt-[50px] flex flex-col items-center justify-center bg-[#F1F1F1]">
        <div className="text-[18px] font-[600] text-[#ED2027]">OUR SERVICES</div>
        <div className="text-[40px] font-[700] my-[50px]">WHAT WE DO?</div>

        <div className=' flex gap-[26px]'>
            <WhatWeDoCompo image={Buy} Heading="Buy A New Home" text="Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience."/>
            <WhatWeDoCompo image={Rent} Heading="Rent A Home" text="Discover your perfect rental effortlessly. Explore a diverse variety of listings tailoredprecisely to suit your unique lifestyle needs."/>
            <WhatWeDoCompo image={Sels} Heading="Sell A Home" text="Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale."/>
            
        </div>
        </div>
    </div>
  )
}

export default WhatWeDo
