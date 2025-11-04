import { useState } from "react";
import Friends from "./components/Example";
import Obj from "./components/Obj";
import ArrObj from "./components/ArrObj";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Arrow from "./components/ArrowFunc";
import Arrow2 from "./components/Arrow2";
import Arrow3 from "./components/Arrow3";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      {count}

      <button onClick={increment} style={{ marginRight: 10 }}>
        +
      </button>

      <button onClick={decrement}>-</button>

      <Friends />

      <Obj />

      <ArrObj />

      <Comp1 count={count} onClickHandel={() => setCount(count + 1)} />
      <Comp2 count={count} onClickHandel={() => setCount(count + 1)} />

        <Arrow />

        <Arrow2 />

        <Arrow3 />
    </div>
  );
};

export default App;
