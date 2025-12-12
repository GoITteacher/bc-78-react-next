import { useState } from "react";
import css from "./UserInfo.module.css";

const UserInfo = () => {
  const [user, setUser] = useState({
    firstName: "Vasya",
    age: 25,
    balance: 100,
  });

  const handleAgeIncrement = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const handleBalanceIncrement = () => {
    const copy = { ...user };
    copy.balance += 100;
    setUser(copy);
  };

  return (
    <div className={css["userInfo"]}>
      <p>Username: {user.firstName}</p>
      <div>
        <p>Age: {user.age}</p>
        <button onClick={handleAgeIncrement}>+</button>
      </div>
      <div>
        <p>Balance: {user.balance} </p>
        <button onClick={handleBalanceIncrement}>+</button>
      </div>
    </div>
  );
};

export default UserInfo;
