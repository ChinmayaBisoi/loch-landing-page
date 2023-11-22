import React from "react";

const AutoScrollCard2 = () => {
  return (
    <div className="p-[14px] text-grey-900 rounded-[8.4px] bg-neutral-50 w-[189.7px] h-[171.5px] flex flex-col justify-between">
      <div className="flex justify-between mb-[14px]">
        <img src="clock.svg" className="w-7 h-7" />
        <input
          readOnly
          type="checkbox"
          name="static"
          id="static"
          className="rounded-[4.2px]"
          checked
        />
      </div>
      <div className="mt-auto max-w-[114.1px]">
        <p className="mb-[9px] text-[11.2px] font-medium leading-[13.44px]">
          Notify me when any wallet dormant for
        </p>
        <div className="rounded-[2.8px] bg-grey-50 p-[4.2px] flex items-center w-fit mb-[8.4px]">
          <span className="text-[9.1px] leading-[10.92px] font-medium mr-[2.8px]">
            $1,000.00
          </span>
          <img src="triangle-down.svg" className="w-[11.2px] h-[11.2px]" />
        </div>
        <p className="text-[11.2px] font-medium leading-[13.44px]">
          becomes active
        </p>
      </div>
    </div>
  );
};

export default AutoScrollCard2;
