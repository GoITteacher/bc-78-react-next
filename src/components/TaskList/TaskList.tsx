import { Task } from "../../types/tasks";
import TaskItem from "./TaskItem/TaskItem";
import css from "./TaskList.module.css";

const TaskList = ({ items }: { items: Task[] }) => {
  return (
    <div className={css["taskList"]}>
      <ul className={css["list"]}>
        {items.map((item) => {
          return <TaskItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
