import React, { useState, useContext } from "react";
import { context } from "./useContext";

const Child = () => {
  const data = useContext(context);
  const [tech, setTech] = useState("Angular");
  return (
    <div>
      <h1>Technology : {tech}</h1>
      <button onClick={() => setTech(data)}>Change Technology</button>
    </div>
  );
};

export default Child;
