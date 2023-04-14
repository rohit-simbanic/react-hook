import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);
  return (
    <div style={{ textAlign: "center" }}>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallBack;
