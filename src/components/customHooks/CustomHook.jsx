import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  return (
    <div>
      {data?.slice(0, 9).map((item, i) => (
        <div key={i}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
