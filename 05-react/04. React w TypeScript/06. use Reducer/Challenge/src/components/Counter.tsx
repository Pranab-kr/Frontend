import { counterReducer, type CounterState } from "./UseRedsu"
import { useReducer } from "react";
const initialState: CounterState = { count: 0 };

const Counter = () => {

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

    </div>
  )
}
export default Counter