import { Post } from "../../../types/post";
import PostItem from "./PostItem/PostItem";
import css from "./PostList.module.css";

interface PostListProps {
  items: Post[];
}
const PostList = ({ items }: PostListProps) => {
  return (
    <div className={css["postList"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <PostItem data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
