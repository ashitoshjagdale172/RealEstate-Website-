import React from "react";
import home from "../../assets/Images/Home.png"
import building from "../../assets/Images/building.png"
import hut from "../../assets/Images/hut.png"
import RIP from "../../assets/Images/RIP.png"
import Apartment from "../../assets/Images/Apartment.png"
import building2 from "../../assets/Images/building2.png"
import building3 from "../../assets/Images/buildings3.png"
import fort from "../../assets/Images/fort.png"

import PropertyCompo from "./PropertyCompo";
const PropertyType = () => {
  return (
    <div>
      <div className=" flex flex-col mx-[12%] my-[7%] gap-[50px]">
        <div className=" flex items-center justify-between">
          <PropertyCompo image={home} Heading="Residential" number="55"/>
          <PropertyCompo image={building} Heading="Commercial" number="88"/>
          <PropertyCompo image={hut} Heading="Vacation & Resort" number="74"/>
          <PropertyCompo image={RIP} Heading="The Land" number="65"/>
        </div>
        <div className=" flex items-center justify-between">
          <PropertyCompo image={Apartment} Heading="New Construction" number="72"/>
          <PropertyCompo image={building2} Heading="Luxury Estate" number="49"/>
          <PropertyCompo image={building3} Heading="Eco Friendly" number="53"/>
          <PropertyCompo image={fort} Heading="Historic Properties" number="28"/>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
