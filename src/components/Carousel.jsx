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
  const [transition, setTransition] = useState(false);
  const [cards, setCards] = useState(items);

  const totalItems = items.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next item
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setTransition(true);
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [totalItems]);

  function handleTransitionEnd() {
    console.log("transition ended");
    const newCards = [
      ...items.slice(currentIndex),
      ...items.slice(0, currentIndex),
    ];

    setCards(newCards);
    setTransition(false);
  }

  useEffect(() => {
    console.log(transition);
  });

  return (
    <div className="text-white overflow-hidden mb-2 relative" id="container">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex gap-4 transform duration-500 ease-in-out ${
          transition ? "translate-x-[-216px]" : "transition-none"
        }  `}
      >
        {cards.map((item) => {
          return (
            <div
              key={item}
              className={`w-[200px] min-w-[200px] bg-red-400 h-[200px]`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
