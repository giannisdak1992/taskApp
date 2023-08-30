import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]); //define the array

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id); //return the items which its index is not equal to iid
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>Tasks</h1>
      </div>
      <InputArea onAdd={addItem} /> here is the input together with the button
      <div>
        <ul>
          {items.map((toDoItem, index) => ( //here we demonstrate the listed items and we get the function along with the id 
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
