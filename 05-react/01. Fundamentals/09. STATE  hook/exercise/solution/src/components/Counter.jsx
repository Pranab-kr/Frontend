import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You CLicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((pre) => pre - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
