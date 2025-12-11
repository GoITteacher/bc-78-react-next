import Logo from "../custom/Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css["header"]}>
      <Logo />
    </div>
  );
};

export default Header;
