import { useState } from "react";
import SLIDES from "../../data/SLIDER.JS";
import { NextIcon, PrevIcon } from "../Icons/Icons";
import SlideItem from "./SlideItem/SlideItem";

const Slider = () => {
  const [items, setItems] = useState(SLIDES);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = setCurrentIndex.bind(
    this,
    currentIndex >= items.length - 1 ? 0 : currentIndex + 1
  );
  const prev = setCurrentIndex.bind(
    this,
    currentIndex <= items.length -1 ? currentIndex -1: currentIndex - 1
  );
  //   const next = () => setCurrentIndex((prev) =>{
  //       if(prev >= items.length -1){
  //           return 0;
  //       }

  //       return prev +1;
  //   })
  return (
    <section className="slider">
      <div className="wrapper">
        <div className="slides">{
            <SlideItem item={items[currentIndex]} />}
            </div>
        <div className="control">
          {currentIndex <= 0 || (
            <button className="prev" onClick={prev}>
              <PrevIcon />
            </button>
          )}
          {currentIndex >= items.length - 1 || (
            <button className="next" onClick={next}>
              <NextIcon size={28} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
