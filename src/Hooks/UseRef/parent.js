import React, { useEffect, useRef } from "react";
import ChildRef from "./child";

const ParentRef = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
    inputRef.current.value = 1000;
  }, [inputRef]);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <ChildRef data={inputRef} />
    </div>
  );
};

export default ParentRef;
