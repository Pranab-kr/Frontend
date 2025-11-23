import { useState } from "react";

const ToggleBgColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? textColor : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(bgColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {bgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To <br />
          Real World...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBgColor;
