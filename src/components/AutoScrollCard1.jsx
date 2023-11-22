import React from "react";

const AutoScrollCard1 = () => {
  return (
    <div className="p-[14px] text-grey-900 rounded-[8.4px] bg-neutral-50 w-[189.7px] h-[171.5px]">
      <div className="flex justify-between mb-[14px]">
        <img src="bell.svg" className="w-7 h-7" />
        <span className="font-semibold text-[9.1px] leading-[10.92px]">
          Save
        </span>
      </div>
      <p className="mr-[32.7px] mb-[15.5px] text-sm font-medium leading-[16.8px]">
        We’ll be sending notifications to you here
      </p>
      <div className="w-full h-[35px] bg-white rounded-[5.6px] border border-neutral-300" />
    </div>
  );
};

export default AutoScrollCard1;
