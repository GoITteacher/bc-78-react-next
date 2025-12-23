import css from "./TaskForm.module.css";
import { useState } from "react";
import { useCreateTask } from "../../hooks/useCreateTask";

const TaskForm = () => {
  const [text, setText] = useState("");
  const mutate = useCreateTask();

  const handleClick = () => {
    mutate({ text: text });
    setText("");
  };

  return (
    <div className={css["taskForm"]}>
      <input
        type="text"
        className={css["input"]}
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className={css["button"]} onClick={handleClick}>
        Create Task
      </button>
    </div>
  );
};

export default TaskForm;
