import React, { useRef } from "react";

const ChildRef = ({ data }) => {
  const changeRef = () => {
    data.current.style.backgroundColor = "green";
  };
  return (
    <div>
      <button onClick={() => changeRef()}>Change Color</button>
    </div>
  );
};

export default ChildRef;
