"use client";
import { useCounterStore } from "@/stores/counterStore";
import css from "./TotalCounter.module.css";

const TotalCounter = () => {
  const counterValueX = useCounterStore((s) => s.x);
  const counterValueY = useCounterStore((s) => s.y);
  const counterValueQ = useCounterStore((s) => s.q);
  const resetCounter = useCounterStore((s) => s.resetValues);

  return (
    <div className={css["totalCounter"]}>
      <p>X: {counterValueX}</p>
      <p>Y: {counterValueY}</p>
      <p>Q: {counterValueQ}</p>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
};

export default TotalCounter;
