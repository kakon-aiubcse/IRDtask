import React from "react";

const Settings = () => {
  return (
    <>
      <div className=" bg-[#FFFF] border border-[#E2E2E2] rounded-2xl fixed w-[330px] h-[834px] top-[133px] left-[1550px]">
        <span className="absolute w-[83px] h-[24px] top-[35px] left-[124px] text-[#393939] font-inter font-bold text-[20px] leading-[100%] tracking-[0%] text-center">
          Settings
        </span>

        <div className="absolute  w-[289px] h-[55px] top-[84px] left-[21px] rounded-[5px] bg-[#F7F8FA]">
          <div className="flex flex-row relative  left-[21px] w-[289px] h-[55px] justify-start gap-1 items-center ">
            <img
              src="/frameset1.png"
              className=" w-[38px] h-[38px] top-[93px] left-[96px] rounded-2xl bg-[#E8F0F5]"
            />
            <span className="  w-[142px] h-[19px] top-[102px] left-[86px] font-inter font-normal text-[16px] leading-[100%] tracking-[0%] text-[#868686]">
              Language Settings
            </span>
          </div>
        </div>
        <div className="absolute  w-[289px] h-[55px] top-[154px] left-[21px] rounded-[5px] bg-[#F7F8FA]">
          <div className="flex flex-row relative  left-[21px] w-[289px] h-[55px] justify-start gap-1 items-center ">
            <img
              src="/frameset2.png"
              className=" w-[24px] h-[24px] top-[93px] left-[96px] rounded-2xl bg-[#E8F0F5]"
            />
            <span className="  w-[142px] h-[19px] top-[102px] left-[86px] font-inter font-normal text-[16px] leading-[100%] tracking-[0%] text-[#868686]">
              General Settings
            </span>
          </div>
        </div>
        <div className="absolute  w-[289px] h-[55px] top-[224px] left-[21px] rounded-[5px] bg-[#F7F8FA]">
          <div className="flex flex-row relative  left-[21px] w-[289px] h-[55px] justify-start gap-1 items-center ">
            <img
              src="/menu-2.png"
              className=" w-[24px] h-[24px] top-[93px] left-[96px] rounded-2xl bg-[#E8F0F5]"
            />
            <span className="  w-[142px] h-[19px] top-[102px] left-[86px] font-inter font-normal text-[16px] leading-[100%] tracking-[0%] text-[#868686]">
              Font Settings
            </span>
          </div>
        </div>
        <div className="absolute  w-[289px] h-[55px] top-[294px] left-[21px] rounded-[5px] bg-[#F7F8FA] border-l-4 border-l-[#1FA45B]">
          <div className="flex flex-row relative  left-[21px] w-[289px] h-[55px] justify-start gap-1 items-center ">
            <img
              src="/menu-3.png"
              className=" w-[24px] h-[24px] top-[93px] left-[96px] rounded-2xl bg-[#E8F0F5]"
            />
            <span className="  w-[142px] h-[19px] top-[102px] left-[88px] font-inter font-medium text-[16px] leading-[100%] whitespace-nowrap tracking-[0%] text-[#1FA45B]">
              Appearance Settings
            </span>
            <div className="w-[288px] h-[94px] top-[55px]   right-[26px] absolute border-x-[0.5px] border-b-[0.5px] border-[#E2E2E2] ">
              <div className="flex flex-row items-center justify-between mx-7 top-[35px] relative">
                <span className="w-[89px] h-[19px] font-inter font-normal text-[16px] leading-[100%] tracking-[0%]">
                Night Mood
              </span>
              <img
                src="Group266.png"
                className="w-[30px] h-[16px] top-[383px] left-[258px] transition-all duration-[300ms] ease-in-out
"
              />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
