import UserItem from "./UserItem/UserItem";

const UserList = () => {
  return (
    <ul>
      <UserItem name="Anton" age={15} />
      <UserItem name="Roman" age={22} />
      <UserItem name="Vasya" age={12} />
      <UserItem name="Petya" age={27} />
    </ul>
  );
};

export default UserList;
