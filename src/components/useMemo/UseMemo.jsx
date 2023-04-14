import React, { useMemo, useState } from "react";

// usememo returns memoized value but useCallback returns a memoized function

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  const upRise = (count) => {
    if (count > 0) {
      console.log(`You have clicked ${count} times`);
    } else {
      console.log("You have clicked 0 times");
    }
  };
  const clickFunc = useMemo(() => upRise(count), [count]);
  console.log(count);
  return (
    <div className="container">
      {/* using useState hooks */}
      <h2>No of Clicking times:</h2>
      {clickFunc}
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
