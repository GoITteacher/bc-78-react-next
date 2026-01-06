import { getUsers } from "@/lib/usersService";
import Link from "next/link";

const Page = async () => {
  const users = await getUsers();

  return (
    <main>
      <ul>
        {users.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/users/${el.id}`}>{el.username}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
