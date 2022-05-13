import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default UseReducer;
