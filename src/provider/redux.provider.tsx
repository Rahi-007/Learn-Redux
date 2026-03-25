"use client";

import { createContext, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

interface CounterType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// 👉 default value (dummy)
export const CounterContext = createContext<CounterType>({
  count: 0,
  setCount: () => {},
});

// 👉 provider component
const Redux = ({ children, className }: IProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className={className}>{children}</div>
    </CounterContext.Provider>
  );
};

export default Redux;
