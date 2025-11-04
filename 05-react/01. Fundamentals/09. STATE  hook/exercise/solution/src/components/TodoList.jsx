import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage when component mounts
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handelSubmit = (event) => {
    event.preventDefault(); // prevent pge reload

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue(""); // clear input after submit
    }
  };

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handelChange}
          placeholder="Enter Ur Todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
