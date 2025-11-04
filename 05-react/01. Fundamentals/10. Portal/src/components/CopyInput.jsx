import { useState } from "react";
import PopUpComponent from "./PopUpContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const haldelCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={haldelCopy}>Copy</button>

      <PopUpComponent copied={copied} />
    </div>
  );
};

export default CopyInput;
