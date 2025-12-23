import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import { useGetTasks } from "../../hooks/useGetTasks";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import ExampleInput from "../ExampleInput/ExampleInput";

const App = () => {
  const [isModalOpen, open, close] = useModal();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const items = useGetTasks(debouncedQuery);

  return (
    <div className={css["app"]}>
      <ExampleInput />

      <button onClick={open}>OPEN</button>

      <SearchBox value={query} onChange={setQuery} />
      <TaskList items={items} />

      {isModalOpen && (
        <Modal onClose={close}>
          <TaskForm />
        </Modal>
      )}
    </div>
  );
};

export default App;
