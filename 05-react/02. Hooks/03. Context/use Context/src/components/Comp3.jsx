import { useContext } from "react";
import { Data, Data1 } from "../App";

const Comp3 = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return <h1>{`Hello I'm ${name} & ${age} years old`}</h1>;
};

export default Comp3;