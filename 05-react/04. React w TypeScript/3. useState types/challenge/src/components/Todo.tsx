import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTask(""); // Clear the input field after adding a todo
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add a new todo" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={() => addTodo(newTask)}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "completed" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
