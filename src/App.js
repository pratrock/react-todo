import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import Todos from "./components/todos";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: "", text: "", isComplete: false });
  const [editable, setEditable] = useState(false);
  const [editCurr, setEditCurr] = useState(0);
  const handleChange = (e) => {
    setTodo({ ...todo, id: uuid(), text: e.target.value });
  };

  const completeTodo = (e, idx) => {
    e.preventDefault();
    const todoLists = todos.map((todo) => {
      if (todo.id === idx) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(todoLists);
  };

  const deleteTodo = (e, idx) => {
    e.preventDefault();
    const todoList = todos.filter((todo) => todo.id !== idx);
    setTodos(todoList);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ id: "", text: "", isComplete: false });
  };

  const editField = (e, idx) => {
    e.preventDefault();
    setEditCurr(idx);
    if (editable) {
      setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === idx) {
            todo.text = e.target.innerText;
          }
          return todo;
        })
      );
    }
    setEditable(!editable);
  };

  return (
    <div>
      <div className="addTodos">
        <Input name="todo" value={todo.text} handleChange={handleChange} />
        <Button onClick={addTodo} name="Add" classes={"submit"} />
      </div>

      <Todos
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editable={editable}
        onEdit={editField}
        currentEdit={editCurr}
      />
    </div>
  );
}

export default App;
