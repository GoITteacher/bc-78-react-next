import Link from "next/link";
import css from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css["layout"]}>
      <aside>
        <ul>
          <li>
            <Link href="/profile/avatar">Avatar</Link>
          </li>
          <li>
            <Link href="/profile/personal-info">Personal Info</Link>
          </li>
          <li>
            <Link href="/profile/notification">Notification</Link>
          </li>
          <li>
            <Link href="/profile/address">Address</Link>
          </li>
        </ul>
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
