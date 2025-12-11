import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css["navigation"]}>
      <ul className={css["nav-list"]}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shopping List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
