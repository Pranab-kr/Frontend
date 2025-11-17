import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // console.log(intervalRef);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // 🔁 Effect runs only when isRunning changes

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h1>Timer: {count} sec</h1>
      <button onClick={handleStart}>▶ Start</button>
      <button onClick={handleStop}>⏸ Pause</button>
      <button onClick={handleReset}>🔁 Reset</button>
    </div>
  );
};

export default Timer;
