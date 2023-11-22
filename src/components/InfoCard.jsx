import React from "react";

const GetNotified = ({
  imgSrc = "bell1.svg",
  imgAlt = "icon",
  title = "",
  subtitle = "",
  showLetterBorder = false,
  wrapperCss = "",
}) => {
  return (
    <div className={`md:max-w-[322px] font-medium ${wrapperCss}`}>
      <img src={imgSrc} alt={imgAlt} className="w-8 h-8" />
      <h2
        style={
          showLetterBorder
            ? {
                textShadow:
                  "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
              }
            : null
        }
        className="my-4 mr-[9px] text-white text-[31px] leading-[37.2px]"
      >
        {title}
      </h2>
      <p className="leading-[19.2px] text-grey-300">{subtitle}</p>
    </div>
  );
};

export default GetNotified;
