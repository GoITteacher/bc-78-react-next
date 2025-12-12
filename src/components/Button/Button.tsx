import css from "./Button.module.css";

const Button = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <button className={css["button"]} onClick={handleClick}>
      Button
    </button>
  );
};

export default Button;
