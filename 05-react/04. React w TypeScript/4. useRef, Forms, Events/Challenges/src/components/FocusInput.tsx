import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCLick = () => {
    inputRef.current?.focus()
  };

  return (
    <div>
      <input type="text" placeholder="Click to focus" ref={inputRef} />

      <button onClick={handleCLick}>Click</button>
    </div>
  );
};
export default FocusInput;
