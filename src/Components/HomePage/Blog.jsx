import React from "react";
import Kitchen from "../../assets/Images/kitchen.png";
import ground from "../../assets/Images/ground.png";
import topview from "../../assets/Images/topview.png";
import BlogComp from "./BlogComp";
const Blog = () => {
  return (
    <div>
      <div className="pb-[50px] pt-[50px] flex flex-col items-center justify-center gap-[40px]">
        <div className="text-[18px] font-[600] text-[#ED2027]">
          OUR BLOG AND ARTICLES
        </div>
        <div className="text-[40px] font-[700] ">Latest Blog Post</div>
        <div className=" flex gap-[26px] justify-center items-center">
          <BlogComp
            images={Kitchen}
            heading="Building Gains Into Housing Stocks And How To Trade The Sector"
            date="20 June 2024"
            owner="By, Sam Mehata"
            text="Lorem Ipsum is simply dummy text of printing industry Lorem
                Ipsum been industry standard dummy text since book."
          />
          <BlogComp
            images={ground}
            heading="92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans"
            date="20 June 2024"
            owner="By, Jenny Parera"
            text="Lorem Ipsum is simply dummy text of printing industry Lorem
                Ipsum been industry standard dummy text since book."
          />
          <BlogComp
            images={topview}
            heading="We Are Hiring ‘Moderately,’ Says Compass CEO"
            date="20 June 2024"
            owner="By, Siddesh Joshi"
            text="Lorem Ipsum is simply dummy text of printing industry Lorem
                Ipsum been industry standard dummy text since book."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
