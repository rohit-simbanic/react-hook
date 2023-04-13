import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  });
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
    </div>
  );
};

export default UseEffect;
