import React from "react";
import './SignBtn.scss'

const SignBtn = ({ text }) => {
  return (
    <div>
      <button className="btn" type="submit">
        <span>{ text }</span>
      </button>
    </div>
  );
};

export default SignBtn;
