import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white rounded-lg flex flex-col fixed w-[100px] h-[927px] top-[40px] left-[40px]">
        <div>
          <img
            src="/logo.png"
            className="absolute w-[73px] h-[73px] top-[31px] left-[14px]"
          />
        </div>
        <ul className=" absolute w-[38px] h-[428px] top-[249.5px] left-[31px] space-y-[27px]">
          <li>
            <img
              src="/Home.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/Allduas.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/Ruqyah.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/Bookmark.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/Memorize.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/DuaQ&A.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
          <li>
            <img
              src="/Book.png"
              className="w-[38px] h-[38px] transition-all duration-[300ms] ease-in-out"
            />
          </li>
        </ul>
        <img
          src="/support.png"
          className="absolute w-[57px] h-[56px] top-[840px] left-[22px]"
        />
      </div>
    </>
  );
};

export default Sidebar;
