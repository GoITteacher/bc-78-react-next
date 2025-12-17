import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    const value = localStorage.getItem("counterValue") || 0;
    return Number(value);
  });

  useEffect(() => {
    localStorage.setItem("counterValue", counter.toString());
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <div>
        <p>{counter}</p>
      </div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
