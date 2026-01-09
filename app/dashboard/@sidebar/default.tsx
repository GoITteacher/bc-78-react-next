import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link href="/dashboard/products">Products</Link>
        </li>
        <li>
          <Link href="/dashboard/notifications">Notifications</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
