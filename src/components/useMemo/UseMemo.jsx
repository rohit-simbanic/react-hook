import React, { useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  console.log(count);
  return (
    <div className="container">
      {/* using useState hooks */}
      <span
        className="icon"
        onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
      >
        -
      </span>
      <h3>{count}</h3>
      <span className="icon" onClick={() => setCount(count + 1)}>
        +
      </span>
      <br />
      <button onClick={() => setClick(!click)}>
        {click ? "You Clicked" : "Plz click me"}
      </button>
    </div>
  );
};

export default UseMemo;
