"use client";
import { useState } from "react";
import css from "./CounterX.module.css";
import { useCounterStore } from "@/stores/counterStore";

const CounterX = () => {
  const setUserX = useCounterStore((s) => s.setX);
  const incrementX = useCounterStore((s) => s.incrementX);
  const decrementX = useCounterStore((s) => s.decrementX);
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setUserX(value);
  };

  return (
    <div className={css["counterX"]}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleClick}>Set new Value</button>
      <button onClick={incrementX}>+</button>
      <button onClick={decrementX}>-</button>
    </div>
  );
};

export default CounterX;
