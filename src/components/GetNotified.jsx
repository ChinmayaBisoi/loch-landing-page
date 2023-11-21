import React from "react";

const GetNotified = () => {
  return (
    <div className="">
      <img src="Bell1.svg" className="logo react" alt="React logo" />
      <h2
        style={{
          textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
        }}
        className="my-4 mr-[9px] text-white text-[31px] leading-[37.2px]"
      >
        Get notified when a highly correlated whale makes a move
      </h2>
      <p className="leading-[19.2px] text-[#f2f2f2]">
        Find out when a certain whale moves more than any preset amount on-chain
        or when a dormant whale you care about becomes active.
      </p>
    </div>
  );
};

export default GetNotified;
