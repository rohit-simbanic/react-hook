import React from "react";
import { useCustomContext } from "./UserContext";

const UseContextChild = () => {
  const userData = useCustomContext();
  console.log(userData);
  return (
    <div>
      <h1
        style={{ textAlign: "center" }}
      >{`My parent name is ${userData.name} and his age is ${userData.age}`}</h1>
    </div>
  );
};

export default UseContextChild;
