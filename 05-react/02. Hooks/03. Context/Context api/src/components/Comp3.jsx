import { Data, Data1 } from "../App";

const Comp3 = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => <h1>{`Hello im ${name} & ${age} years Old`}</h1>}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default Comp3;
