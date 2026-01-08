import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/profile/personal-info/firstname">Firstname</Link>
        </li>
        <li>
          <Link href="/profile/personal-info/lastname">Lastname</Link>
        </li>
        <li>
          <Link href="/profile/personal-info/login">Login</Link>
        </li>
        <li>
          <Link href="/profile/personal-info/password">Password</Link>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
