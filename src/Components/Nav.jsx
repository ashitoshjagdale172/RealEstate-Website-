import { useState } from "react";

const Nav = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const handleDropdown = (dropdownNumber) => {
    setIsDropdownOpen1(dropdownNumber === 1);
    setIsDropdownOpen2(dropdownNumber === 2);
    setIsDropdownOpen3(dropdownNumber === 3);
    setIsDropdownOpen4(dropdownNumber === 4);
  };
  
  return (
    <div>
      <div className=" flex items-center justify-between px-12 py-2 z-20 relative bg-[#ffffff]">
        <div className=" text-[30px] font-[700] text-[#ED2027]">RealEstate</div>
        <div className=" flex items-center gap-10">
          <div
            className="text-[20px] font-[600] relative"
            onMouseOver={() => handleDropdown(1)}
            
          >
            Buy<span>{isDropdownOpen1 && <span className="">&#11167;</span>}{ ! isDropdownOpen1 && <span className=" invi"> &#11165;</span>
              }
            </span>
          </div>
          {isDropdownOpen1 && (
            <div onMouseLeave={() => setIsDropdownOpen1(false)} className="absolute top-20 z-30 left-[32%] bg-white p-4 w-[200] flex  justify-center ">
              <div className="hover:bg-gray-100 text-[12px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  BUY A HOME
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  LAND/PLOT
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  COMMERCIAL
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  POPULAR AREAS
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  ARTICLES & NEWS
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  PROPERTIES IN PUNE
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Flats
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Builder Floors
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Independent House
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Plots in Pune
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Serviced Apartments
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Studio Apartments/1 RK Flats
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  POPULAR SEARCHES
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Property in Pune
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Verified Property in Pune
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  New Projects in Pune
                </a>
              </div>
            </div>
          )}
          <div
            className="text-[20px] font-[600] relative"
            onMouseOver={() => handleDropdown(2)}
           
          >
            Sell<span>{isDropdownOpen2 && <span className="">&#11167;</span>}{ ! isDropdownOpen2 && <span className=" invi"> &#11165;</span>
              }
            </span>
          </div>
          {isDropdownOpen2 && (
            <div  onMouseLeave={() => setIsDropdownOpen2(false)} className=" z-30 absolute top-20 left-[36%] bg-white p-4 w-[200] flex  justify-center ">
              <div className="hover:bg-gray-100 text-[12px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  FOR OWNER
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Post Prroperty for Free
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  My Dashboard
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  FOR AGENT & BUILDER
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  My Dashboard
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Ad Packages
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Independent House
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Sales Enquiry
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  SELLING TOOLS
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Property Valuation
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Find an Agents
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Rates & Trends
                </a>
              </div>
            </div>
          )}
          <div
            className="text-[20px] font-[600] relative"
            onMouseOver={() => handleDropdown(3)}
            
          >
            Rent<span>{isDropdownOpen3 && <span className="">&#11167;</span>}{ ! isDropdownOpen3 && <span className=" invi"> &#11165;</span>
              }
            </span>
          </div>
          {isDropdownOpen3 && (
            <div onMouseLeave={() => setIsDropdownOpen3(false)} className="absolute top-20 left-[40%] z-30 bg-white p-4 w-[200] flex  justify-center ">
              <div className="hover:bg-gray-100 text-[12px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  BUY A HOME
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  PG/CO-LIVING
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  COMMERCIAL
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  POPULAR AREAS
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  ARTICLES & NEWS
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  PROPERTIES IN PUNE
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Flats
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Builder Floors
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Independent House
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Plots in Pune
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Serviced Apartments
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Studio Apartments/1 RK Flats
                </a>
              </div>
              <div className="hover:bg-gray-100 text-[13px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  POPULAR SEARCHES
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Property in Pune
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-800"
                >
                  Verified Property in Pune
                </a>
              </div>
            </div>
          )}
          <div
            className="text-[20px] font-[600] relative"
            onMouseOver={() => handleDropdown(4)}
            
          >
            Dashboard <span>{isDropdownOpen4 && <span className="">&#11167;</span>}{ ! isDropdownOpen4 && <span className=" invi"> &#11165;</span>
              }
            </span>
          </div>
          {isDropdownOpen4 && (
            <div onMouseLeave={() => setIsDropdownOpen4(false)} className="absolute top-20 left-[45%] bg-white p-4 w-[200] z-30 flex  justify-center ">
              <div className="hover:bg-gray-100 text-[12px] font-[600]">
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  BUY A HOME
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  PG/CO-LIVING
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  COMMERCIAL
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  POPULAR AREAS
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 block py-2 pl-2 pr-8 text-gray-400"
                >
                  ARTICLES & NEWS
                </a>
              </div>
            </div>
          )}
        </div>
        <div className=" flex items-center gap-10">
          <div>
            <button
              href="#"
              className=" py-1 px-3 text-red-600 rounded-[10px] border-[#dc2626] border-2 border-solid"
            >
              Login/Register
            </button>
          </div>
          <div>
            <button
              href="#"
              className=" py-1 w-[150px] text-white bg-red-600 rounded-[10px] border-red-600"
            >
              Submit Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
