import { useState } from "react";

const Arrow = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;

    return initialCount;
  });

  const updateCount = () => {

    setCount((prevCount) => prevCount + 1);
    // console.log(count);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={updateCount}>Increment</button>
    </div>
  );
};

export default Arrow;
