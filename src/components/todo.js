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
        className={todo.isComplete ? "completed" : ""}
      >
        {todo.text}
      </p>
      <Button
        name={todo.isComplete ? "Incomplete" : "Complete"}
        onClick={(e) => completeTodo(e, todo.id)}
        classes="isComplete"
      />
      <Button
        name={currentEdit === id && editable ? "Update" : "Edit"}
        onClick={(e) => onEdit(e, todo.id)}
        classes="edit"
      >
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          aria-label="fontSize small"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
        </svg>
      </Button>
      <Button
        name="Delete"
        classes="delete"
        onClick={(e) => deleteTodo(e, todo.id)}
      >
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          aria-label="fontSize small"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </Button>
    </div>
  );
}

export default Todo;
