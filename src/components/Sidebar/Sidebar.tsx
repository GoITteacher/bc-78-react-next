import CategoryList from "./CategoryList/CategoryList";
import css from "./Sidebar.module.css";
import Supports from "./Supports/Supports";

const Sidebar = () => {
  return (
    <aside className={css["sidebar"]}>
      <CategoryList />
      <Supports />
    </aside>
  );
};

export default Sidebar;
