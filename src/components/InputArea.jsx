import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function toDo(event) {
    const duty = event.target.value;
    setInputText(duty);
  }

  return (
    <div className="form">
      <input type="text" onChange={toDo} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText); //send the together with the inputText to App.jsx for getting submitted
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
