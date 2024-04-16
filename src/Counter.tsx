import React, { createContext, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

const Count: React.FC = () => {
  const { count } = useContext(CounterContext)!;
  return <span>{count}</span>;
};

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <span>{children}</span>;
};

interface IncreaseProps {
  icon: React.ReactNode;
}

const Increase: React.FC<IncreaseProps> = ({ icon }) => {
  const { increase } = useContext(CounterContext)!;
  return <button onClick={increase}>{icon}</button>;
};

interface DecreaseProps {
  icon: React.ReactNode;
}

const Decrease: React.FC<DecreaseProps> = ({ icon }) => {
  const { decrease } = useContext(CounterContext)!;
  return <button onClick={decrease}>{icon}</button>;
};

interface CounterProps {
  children: React.ReactNode;
}

const Counter: React.FC<CounterProps> & {
  Count: React.FC;
  Label: React.FC<LabelProps>;
  Increase: React.FC<IncreaseProps>;
  Decrease: React.FC<DecreaseProps>;
} = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
