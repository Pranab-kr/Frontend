import { useRef } from "react";
import Timer from "./components/Timer";

const App = () => {
  const inputElement = useRef(null);

  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Pranab";
  };

  return (
    <div>
      <input
        type="text"
        ref={inputElement}
        placeholder="Click The Btn to Focus"
      />

      <button onClick={() => focusInput()}>Focuse & Study</button>

      <Timer />
    </div>
  );
};

export default App;
