import Logo from "../custom/Logo/Logo";
import css from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
import UserInfo from "./UserInfo/UserInfo";

const Header = () => {
  return (
    <div className={css["header"]}>
      <Logo />

      <Navigation />

      <UserInfo />
    </div>
  );
};

export default Header;
