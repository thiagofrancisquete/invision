import React from "react";
import google from "../../assets/google.png";
import "./Google.scss";

function Google({ title }) {
  return (
    <div>
      <button className="google">
        <img src={google} alt="google logo" />
        <span>{title} with google</span>
      </button>
    </div>
  );
}

export default Google;
