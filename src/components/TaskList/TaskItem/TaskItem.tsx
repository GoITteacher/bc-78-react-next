import { Task } from "../../../types/tasks";
import css from "./TaskItem.module.css";
import { useDeleteTask } from "../../../hooks/useDeleteTask";
import { useUpdateTask } from "../../../hooks/useUpdateTask";

const TaskItem = ({ item }: { item: Task }) => {
  const deleteMutation = useDeleteTask();
  const updateMutation = useUpdateTask();

  return (
    <li className={css["taskItem"]}>
      <p className={css["text"]}>
        <span
          className={item.completed ? css["statusDone"] : css["statusOpen"]}
        >
          {item.completed ? "+" : "-"}
        </span>
        <span className={css["label"]}>:{item.text}</span>
      </p>
      <div className={css["actions"]}>
        <button
          className={`${css["button"]} ${css["primary"]}`}
          onClick={() => updateMutation.mutate(item)}
        >
          change status
        </button>
        <button
          className={`${css["button"]} ${css["danger"]}`}
          onClick={() => deleteMutation.mutate(item.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
