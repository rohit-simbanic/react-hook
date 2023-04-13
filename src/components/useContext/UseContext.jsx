import React from "react";
import UseContextChild from "./UseContextChild";
// context,  provider, consumer

const UseContext = ({ userData }) => {
  //   console.log(userData);
  return (
    <div>
      <UseContextChild />
    </div>
  );
};

export default UseContext;
