import { useState } from "react";
import css from "./UserForm.module.css";

const UserForm = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div className={css["userForm"]}>
      <input type="text" onChange={handleNameChange} value={name} />
      <p>Hello: {name}</p>
      <button onClick={() => setName("")}>Clear Name ({name})</button>
    </div>
  );
};

export default UserForm;
