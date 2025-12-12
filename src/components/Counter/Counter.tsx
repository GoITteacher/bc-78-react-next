import { useState } from "react";
import css from "./Counter.module.css";
import CounterControllers from "./CounterControllers/CounterControllers";
import CounterInfo from "./CounterInfo/CounterInfo";

const Counter = () => {
  const [x, setX] = useState(0);

  const increment = () => {
    setX(x + 1);
  };

  const decrement = () => {
    setX(x - 1);
  };

  return (
    <div className={css["counter"]}>
      <CounterControllers increment={increment} decrement={decrement} />
      <CounterInfo x={x} />
    </div>
  );
};

export default Counter;
