import { createContext, useState, type ReactNode } from "react";

interface MyContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyProviderType {
  children: ReactNode;
}

const MyProvider= ({ children }: MyProviderType) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
