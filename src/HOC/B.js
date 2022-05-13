import React, { useState } from "react";
import Counter from "./Counter";
const B = ({ count, increment }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onMouseOver={increment}>Click</button>
    </div>
  );
};

export default Counter(B);
