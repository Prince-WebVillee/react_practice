import React, { useState, createContext } from "react";
import Child from "./child";
export const context = createContext();
let a = "React Js";
const UseContext = () => {
  return (
    <context.Provider value={a}>
      <Child />
    </context.Provider>
  );
};

export default UseContext;
