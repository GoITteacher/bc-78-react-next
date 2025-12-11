import { Book } from "../../../../types/books";
import css from "./BookItem.module.css";
import { Card, Image } from "antd";
const { Meta } = Card;

interface BookItemProps {
  bookData: Book;
}

const BookItem = ({ bookData }: BookItemProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img draggable={false} alt="example" src={bookData.book_image} />}
    >
      <Meta title={bookData.title} description={bookData.author} />
    </Card>
  );
  // return (
  //   <div className={css["book-item"]}>
  //     <Image
  //       className={css["book-item__img"]}
  //       src={bookData.book_image}
  //       alt={bookData.title}
  //       width={bookData.book_image_width}
  //       height={bookData.book_image_height}
  //     />
  //     <p className={css["book-item__title"]}>{bookData.title}</p>
  //     <p className={css["book-item__author"]}>{bookData.author}</p>
  //   </div>
  // );
};

export default BookItem;
