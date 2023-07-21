import React from "react";
import Button from "./button";
import "../App.css";
function todo({ todo, completeTodo, deleteTodo, editable, onEdit }) {
  return (
    <div className="todoset">
      <p contentEditable={editable}>{todo.text}</p>
      <Button
        name={todo.isComplete ? "Incomplete" : "Complete"}
        onClick={completeTodo}
      />
      <Button name="Edit" onClick={onEdit} />
      <Button name="Delete" onClick={deleteTodo} />
    </div>
  );
}

export default todo;
