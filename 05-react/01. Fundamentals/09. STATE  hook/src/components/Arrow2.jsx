import { useState } from "react";

const Arrow2 = () => {
  const [randomNum, setRandomNum] = useState(() => {
    return Math.floor(Math.random() * 100);
  });

  const updateNum = () => {
    const newNum = Math.floor(Math.random() * 100);

    setRandomNum(newNum)
  };

  return (
    <div>
      <h1>Random Number: {randomNum}</h1>

      <button onClick={updateNum}>New num</button>
    </div>
  );
};

export default Arrow2;
