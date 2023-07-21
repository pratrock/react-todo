import React from "react";
import Todo from "./todo";
import uuid from "react-uuid";
import "../App.css";
function todos({ todos, completeTodo, deleteTodo, editable, onEdit }) {
  return (
    <div>
      {todos.map((text, i) => {
        return (
          <div key={uuid()} className="todos">
            <Todo
              todo={text}
              completeTodo={(e) => completeTodo(e, text.id)}
              deleteTodo={(e) => deleteTodo(e, text.id)}
              editable={editable}
              onEdit={(e) => onEdit(e, text.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default todos;
