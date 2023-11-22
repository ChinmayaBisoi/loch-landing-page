import React from "react";

const AutoScrollCard2 = () => {
  return (
    <div className="p-[14px] text-grey-900 rounded-[8.4px] bg-neutral-50 w-[189.7px] h-[171.5px]">
      <div className="flex justify-between mb-[55.3px]">
        <img src="stats.svg" className="w-7 h-7" />
        <input
          readOnly
          type="checkbox"
          name="static"
          id="static"
          className="rounded-[4.2px]"
          checked
        />
      </div>
      <div className="">
        <p className="mb-[14.6px] text-[11.2px] font-medium leading-[13.44px]">
          Notify me when any wallets move more than
        </p>
        <div className="rounded-[2.8px] bg-grey-50 p-[4.2px] flex items-center w-fit">
          <p className="text-[9.2px] leading-[10.92px] font-medium mr-[2.8px]">
            $1,000.00
          </p>
          <img src="triangle-down.svg" className="w-[11.2px] h-[11.2px]" />
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCard2;
