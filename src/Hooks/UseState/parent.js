import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleCallBack = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <Child parentCallBack={handleCallBack} />
    </div>
  );
};

export default Parent;
