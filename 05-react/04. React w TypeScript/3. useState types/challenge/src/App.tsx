import { useState } from "react";
import UserProfile from "./components/UserProfile";
import Todo from "./components/Todo";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <UserProfile />

      <Todo />
    </div>
  );
};
export default App;
