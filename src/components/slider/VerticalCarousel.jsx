import React, { useState, useEffect } from "react";
import cn from "classnames";
import { slides } from "../../helpers/Constant";
import "./slider.css"
const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const tiemOut = setTimeout(() => {
      handleClick("next");
    }, 2000);
    return () => clearTimeout(tiemOut);
  });

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(slides.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 72;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(slides.length + activeIndex - itemIndex) * itemHeight;
      }
    }
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (slides.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };
  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > slides.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="container">
      <section >
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="leading-text"></div>
            <div className="slides">
              <div className="carousel-inner flex justify-center items-end">
                {slides.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item text-[15px] md:text-[20px] font-poppins font-bold", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <=
                        visibleStyleThreshold,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    {item.introline}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default VerticalCarousel;
