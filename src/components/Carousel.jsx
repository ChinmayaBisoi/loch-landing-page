import { useState, useRef, useEffect } from "react";

const Carousel = ({ autoScroll = false, scrollOnDrag = false, items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [cards, setCards] = useState(items);

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const totalItems = items.length;

  useEffect(() => {
    let intervalId;
    if (autoScroll) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        setTransition(true);
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [totalItems]);

  function handleTransitionEnd() {
    if (autoScroll) {
      const newCards = [
        ...items.slice(currentIndex),
        ...items.slice(0, currentIndex),
        ...items.slice(currentIndex, 2),
      ];

      setCards(newCards);
      setTransition(false);
    }
  }

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStartPoint = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!scrollOnDrag) return;
    setIsDragging(true);
    dragStartPoint.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!scrollOnDrag) return;

    if (isDragging) {
      const deltaX = e.clientX - dragStartPoint.current.x;
      const deltaY = e.clientY - dragStartPoint.current.y;

      const containerWidth = containerRef
        ? containerRef?.current.clientWidth
        : 0;

      const trackWidth = trackRef ? trackRef?.current.clientWidth : 0;

      setPosition((prevPosition) => {
        const newXPos = prevPosition.x + deltaX;
        const newYPos = prevPosition.y + deltaY;

        if (newXPos > containerWidth - containerWidth * 0.35) {
          return {
            x: 0,
            y: prevPosition.y,
          };
        } else if (
          Math.abs(newXPos) >
          trackWidth + containerWidth - (trackWidth + containerWidth) * 0.35
        ) {
          return {
            x: 0,
            y: prevPosition.y,
          };
        }
        return {
          x: newXPos,
          y: newYPos,
        };
      });

      dragStartPoint.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    if (!scrollOnDrag) return;

    setIsDragging(false);
  };

  function handleMouseOut() {
    if (!scrollOnDrag) return;

    setIsDragging(false);
  }

  return (
    <div
      ref={containerRef}
      className="text-white overflow-hidden relative"
      id="container"
    >
      <div
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        style={scrollOnDrag ? { transform: `translate(${position.x}px` } : null}
        className={`flex gap-4 transform duration-500 ease-in-out scroll-smooth 
        ${scrollOnDrag ? "cursor-pointer" : ""}
        ${
          transition && autoScroll
            ? "translate-x-[-205.7px]"
            : "transition-none"
        }
       
        `}
      >
        {cards.map((Card, index) => {
          return (
            <div key={index} className={`flex`}>
              <Card />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
