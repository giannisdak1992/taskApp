import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id); //send the id back to app.jsx for getting removed
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
