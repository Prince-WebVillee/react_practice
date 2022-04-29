import React, { useState } from "react";

const Child = ({ parentCallBack }) => {
  return (
    <div>
      <button onClick={() => parentCallBack(1)}>Change Value</button>
    </div>
  );
};

export default Child;
