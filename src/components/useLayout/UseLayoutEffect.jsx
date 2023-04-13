import React, { useEffect, useState } from "react";

const UseLayoutEffect = () => {
  // useLayoutEffect, runs synchronously after a render but before the screen is updated
  //useEffect runs asynchronously and after a render is painted to the screen

  //   useEffect(() => {
  //     console.log("I will print third");
  //   });
  //   useLayoutEffect(() => {
  //     console.log("I will print first");
  //   });
  //   useEffect(() => {
  //     console.log("It will print last");
  //   });
  //   useLayoutEffect(() => {
  //     console.log("I will print second");
  //   });
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num === 0) {
      setNum(Math.random() * 100);
    }
  }, [num]);
  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <p>Random number: {num}</p>
      <button onClick={() => setNum(0)}>Generate New Random Number</button>
    </div>
  );
};

export default UseLayoutEffect;
