import React, { useEffect, useState } from "react";
import './Todos.css';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleClear = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  const handleDone = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
          }
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button 
                onClick={() => handleDone(index)}
                className="done-btn"
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos available. Please add some!</p>
      )}
      <button onClick={handleClear}>Clear Todos</button>
      <p className="total-todos">Total Todos: {todos.length}</p>
    </div>
  );
};

export default Todos;
