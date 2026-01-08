import Link from "next/link";
import css from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={css["appHeader"]}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/users">User</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
