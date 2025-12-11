import { Book } from "../../../types/books";
import BookItem from "./BookItem/BookItem";
import css from "./BookList.module.css";
interface BookListProps {
  items: Book[];
}
const BookList = ({ items }: BookListProps) => {
  return (
    <ul className={css["book-list"]}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <BookItem bookData={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
