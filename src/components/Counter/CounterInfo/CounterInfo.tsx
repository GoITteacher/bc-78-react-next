import css from "./CounterInfo.module.css";
interface CounterInfoProps {
  x: number;
}
const CounterInfo = ({ x }: CounterInfoProps) => {
  return (
    <div className={css["counterInfo"]}>
      <p>{x}</p>
    </div>
  );
};

export default CounterInfo;
