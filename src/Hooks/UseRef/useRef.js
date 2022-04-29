import React, { createRef, useEffect, useRef } from "react";

const Ref = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = 1000;
    inputRef.current.style.backgroundColor = "green";
    inputRef.current.style.color = "white";
  }, [inputRef]);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Ref;
