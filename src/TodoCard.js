import React from "react";
import TodoCard from './TodoCard.css'

function ToDoCard(props) {
  return (
    <div className="todoContainer">
      <li className="list">{props.title}</li>
      <button
        className="removeButton"
        onClick={() => {
          props.clickToRemove(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ToDoCard;
