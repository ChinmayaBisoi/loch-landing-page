import React from "react";
import Carousel from "./Carousel";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    testimonial: `“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`,
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    testimonial: `“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`,
  },
  {
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    testimonial: `“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`,
  },
];

const Testimonials = () => {
  const testimonalItems = testimonials.map((item) => {
    return () => <TestimonialCard {...item} />;
  });
  return (
    <div className="">
      <h2 className="text-right mb-5 text-[25px] leading-[30px] font-medium">
        Testimonials
      </h2>
      <div className="h-0.5 w-full bg-grey-50 mb-10" />
      <div className="flex">
        <img src="lochlogo.svg" className="w-[60px] h-[60px] mr-10 mt-auto" />
        <div className="overflow-hidden">
          <Carousel scrollOnDrag items={testimonalItems} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
