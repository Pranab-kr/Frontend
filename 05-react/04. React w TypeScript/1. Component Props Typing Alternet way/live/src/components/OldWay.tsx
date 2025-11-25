import type { FC } from "react";

type userInfo = {
  name: string;
  age: number;
  isStudent: boolean;
};

const OldWay: FC<userInfo> = ({ name, age, isStudent }) => {
  return (
    <div>
      <br />
      <h1>Old Way</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};
export default OldWay;
