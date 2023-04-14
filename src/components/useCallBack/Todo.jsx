import React, { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("Todo called");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todo);
