import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex  w-[1920px]   fixed ">
        <div
          className="absolute w-[117px] h-[36px] top-[62px] left-[170px] gap-[2px]"
        >
          <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%] whitespace-nowrap">
            Dua Page
          </p>
        </div>
        <div
          className="absolute w-[371px] h-[52px]  left-[1150px] gap-[15px] flex flex-row items-center"
        >
          <input
            className="bg-white relative top-[54px] h-[52px] w-[371px] px-2 border border-gray-300 rounded-md"
            placeholder="Search by Dua Name"
          />

          <img
            className=" h-[54px] w-[44px] top-[54px] object-contain flex relative right-16"
            src="/Frame.png"
            alt="Search icon"
          />
        </div>
        <div className="absolute top-[57.5px] left-[1814.5px] flex flex-row space-y-2 w-[67.5px]">
          <img src="/profile1.png" alt="Profile" />
          <img
            src="/Polygon2.png"
            className=" w-[12.000000953674363px] h-[8.999999046325717px]  rotate-360 relative top-3 rounded-[1px]"
            alt="Polygon"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
