import React, { useState, memo } from "react";
const ChildUseCallBack = () => {
  console.log("Child Rerendered");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(ChildUseCallBack);
