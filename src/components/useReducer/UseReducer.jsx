import React, { useReducer } from "react";
import reducer from "./reducer";
const initial_val = 0;
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initial_val);
  return (
    <div className="container">
      {/* using useState hooks */}
      <span className="icon" onClick={() => dispatch({ type: "DEC" })}>
        -
      </span>
      <h3>{count}</h3>
      <span className="icon" onClick={() => dispatch({ type: "INC" })}>
        +
      </span>
    </div>
  );
};

export default UseReducer;
