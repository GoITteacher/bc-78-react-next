// import { type Article } from "../types/article";
interface Article {
  objectID: string;
}

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
