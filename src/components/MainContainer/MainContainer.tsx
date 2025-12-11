import { books } from "../../helpers/constants";
import BookList from "./BookList/BookList";
import css from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={css["main-container"]}>
      <h4>
        Hardcover <span>Fiction</span>
      </h4>

      <BookList items={books} />
    </div>
  );
};

export default MainContainer;
