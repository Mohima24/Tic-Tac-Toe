import React from "react";

const SmallBox = ({ value, valuePut }) => {
  return (
    <button className="Small-Box" onClick={valuePut}>
      {value}
    </button>
  );
};

export default SmallBox;
