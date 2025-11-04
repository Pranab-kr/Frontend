import { use, useEffect, useState } from "react";

const Arrow3 = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handelChange = (event) => {
    // console.log(event);
    setName(event.target.value);
  };

  const handelClear = () => setName("");

  return (
    <div>
      <h1>Your Name</h1>

      <input
        type="text"
        value={name}
        onChange={handelChange}
        placeholder="Enter Ur Name"
      />

      <button onClick={handelClear}>Clear Name</button>
    </div>
  );
};

export default Arrow3;
