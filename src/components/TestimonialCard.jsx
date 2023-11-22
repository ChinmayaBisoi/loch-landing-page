import React from "react";

const TestimonialCard = ({ name = "", title = "", testimonial = "" }) => {
  return (
    <div className="h-[136px] min-w-[353px] bg-white rounded-lg p-5 text-grey-900 overflow-hidden">
      <div className="flex items-center gap-2 whitespace-nowrap mb-5">
        <p className="font-semibold leading-[19.2px]">{name}</p>
        <p className="font-medium leading-[15.6px] text-[13px] text-grey-400">
          {title}
        </p>
      </div>
      <p className="font-medium leading-[19.2px] min-w-fit">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
