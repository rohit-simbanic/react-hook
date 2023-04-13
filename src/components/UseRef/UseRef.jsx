import React, { useRef, useState } from "react";
// useRef is used to create a mutable variable which will not re-render the component
//What is mutable value? A mutable value is one that can be changed without creating an entirely new value.
// used to access the DOM element directly
const UseRef = () => {
  const [userInput, setUserInput] = useState("");

  const inputRef = useRef("");
  //   console.log(inputRef.current);
  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "tomato";
    inputRef.current.style.borderColor = "2px solid black";
  };

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          ref={inputRef}
          name=""
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="form-control-useref"
        />
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={changeBorder}
        >
          Submit
        </button>
      </div>
      <p
        style={{ textAlign: "center" }}
      >{`I want ${userInput} for my next travel destination`}</p>
    </>
  );
};

export default UseRef;
