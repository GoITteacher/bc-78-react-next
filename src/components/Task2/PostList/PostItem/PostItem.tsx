import { Post } from "../../../../types/post";
import css from "./PostItem.module.css";

interface PostItem {
  data: Post;
}
const PostItem = ({ data }: PostItem) => {
  return (
    <div className={css["postItem"]}>
      <h4>{data.title}</h4>
      <p>{data.body}</p>
    </div>
  );
};

export default PostItem;
