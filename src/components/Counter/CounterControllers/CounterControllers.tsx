import css from "./CounterControllers.module.css";

interface CounterControllersProps {
  increment: () => void;
  decrement: () => void;
}

const CounterControllers = ({
  increment,
  decrement,
}: CounterControllersProps) => {
  const x = 10;

  return (
    <div className={css["counterControllers"]}>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterControllers;
