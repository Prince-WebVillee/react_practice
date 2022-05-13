import React, { useState } from "react";
import Counter from "./Counter";
const A = ({ count, increment }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default Counter(A);
