import { useState, useRef, useEffect } from "react";

function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}

const Carousel = ({ autoScroll = false }) => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Replace with your carousel items
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next item
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [totalItems]);

  return (
    <div
      className="text-white overflow-hidden mb-2 relative flex gap-4"
      id="container"
    >
      {items.map((item) => {
        return (
          <div
            key={item}
            style={{ transform: `translateX(-${currentIndex * 216}px)` }}
            className={`w-[200px] min-w-[200px] bg-red-400 h-[200px] transform duration-500 ease-in-out ${""}`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
