import clsx from "clsx";
import css from "./UserItem.module.css";

interface UserItemProps {
  name: string;
  age: number;
}

const UserItem = ({ name, age }: UserItemProps) => {
  const isAdult = age >= 18;
  const userItemClassName = clsx(css["user-item"], isAdult && css["is-adult"]);
  return (
    <li className={userItemClassName}>
      <p>
        Name: {name}; Age: {age};
      </p>
      {/* {isAdult && <p>18+</p>} */}

      {/* <p>{isAdult ? "18+" : "18-"}</p> */}
    </li>
  );
};

export default UserItem;

// true && 5; - 5
// false && 5; - false
