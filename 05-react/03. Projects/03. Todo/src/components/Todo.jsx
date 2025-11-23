import { useEffect, useState } from "react";
import "../style.css";

const Todo = () => {
  const [Todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // const haldleSubmit = () => {
  //   setTodos((todos) => {
  //     return todos.concat({
  //       text: input,
  //       id: Math.floor(Math.random() * 10),
  //     });
  //   });

  //   setInput("");
  // };

  const haldleSubmit = () => {
    setTodos((todos) => {
      return [...todos, { text: input, id: Math.floor(Math.random() * 100) }];
    });

    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Ur todo"
      />

      <button onClick={haldleSubmit}>Submit</button>

      <ul className="todos-list">
        {Todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>

            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
