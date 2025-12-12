import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <button className={css["button"]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
