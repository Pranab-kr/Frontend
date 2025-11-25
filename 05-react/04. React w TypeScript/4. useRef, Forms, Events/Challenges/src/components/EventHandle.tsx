import type { MouseEvent } from "react";

const EventHandle = () => {
  const handleclick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>

      <button onClick={handleclick}>Click</button>
    </div>
  );
};
export default EventHandle;
