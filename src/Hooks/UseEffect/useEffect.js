import React, { useEffect, useState, useRef } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = count;
  }, [count]);
  return (
    <div>
      <h1>previous value :{prevRef.current}</h1>
      <h1>current value : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Value</button>
    </div>
  );
};

export default UseEffect;
