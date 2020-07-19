import React, { useState, useEffect } from "react";
import bg from "../../assets/component.png";

import "./Slide.scss";

export default function Slide() {
  const [index, setActiveIndex] = useState(0);

  useEffect(() => {
    autoPlay();
  }, [index]);

  const sliderArr = [
    {
      title: "Marcenas mattis egestas",
      subtitle:
        "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      title: "Marcenas mattis egestas",
      subtitle:
        "Erdum et malesuada fames ac ante ileum primmer in FAUCIBUS uspendisse porta.",
    },
    {
      title: "Marcenas mattis egestas",
      subtitle:
        "Erdum et MALESUADA fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
  ];

  const autoPlay = () => {
    if (index < sliderArr.length - 1) {
      setTimeout(() => {
        setActiveIndex(index + 1);
      }, 2000);
    } else
      setTimeout(() => {
        setActiveIndex(0);
      }, 2000);
  };

  const activeSlide = (index) => {
    return (
      <div className="slide" key={index}>
        <img src={bg} alt="singin" />
        <h1>{sliderArr[index].title}</h1>
        <p>{sliderArr[index].subtitle}</p>
      </div>
    );
  };

  return <div className="Carousel">{activeSlide(index)}</div>;
}
