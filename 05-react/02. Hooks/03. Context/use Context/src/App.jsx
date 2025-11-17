import { createContext } from "react";
import Comp1 from "./components/Comp1";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Pranab";

  const age = 20;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <Comp1 />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;
