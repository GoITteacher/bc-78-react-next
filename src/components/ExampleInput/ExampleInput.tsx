import { useCustomDebounce } from "../../hooks/useCustomDebounce";
import css from "./ExampleInput.module.css";

const ExampleInput = () => {
  const [value, setValue] = useCustomDebounce<string>("");

  return (
    <div className={css["exampleInput"]}>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
    </div>
  );
};

export default ExampleInput;
