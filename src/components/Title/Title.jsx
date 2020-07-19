import React from "react";
import "./Title.scss";

const Title = ({ titulo }) => {
  return (
    <div className="titulo">
      <span>{titulo}</span>
    </div>
  );
};

export default Title;
