import { useState, useEffect } from "react";
import FetchData from "./FetchData";

const App = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log('Call useEffect');
    document.title = `Increment ${value}`
  },[value])

  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("Call useEffect");
  //     document.title = `Increment ${value}`;
  //   }
  // }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <h2>{value2}</h2>

      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue2(value2 - 1)}>Decrement</button>

      <FetchData />
    </div>
  );
};

export default App;
