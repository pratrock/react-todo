import React from "react";
import Button from "./button";
import "../App.css";

function Todo({
  todo,
  completeTodo,
  deleteTodo,
  editable,
  currentEdit,
  id,
  onEdit,
}) {
  return (
    <div className="todoset">
      <p
        contentEditable={currentEdit === id && editable ? true : false}
        suppressContentEditableWarning
        onBlur={(e) => onEdit(e, todo.id)} // Save the edit when the input loses focus
        className={todo.isComplete?"completed":""}
      >
        {todo.text}
      </p>
      <Button
        name={todo.isComplete ? "Incomplete" : "Complete"}
        onClick={(e) => completeTodo(e, todo.id)}
      />
      <Button
        name={currentEdit === id && editable ? "Update" : "Edit"}
        onClick={(e) => onEdit(e, todo.id)}
      />
      <Button name="Delete" onClick={(e) => deleteTodo(e, todo.id)} />
    </div>
  );
}

export default Todo;
