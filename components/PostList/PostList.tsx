import { Post } from "@/types/posts";
import css from "./PostList.module.css";
import Link from "next/link";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className={css["postList"]}>
      {posts.map((el) => {
        return (
          <li key={el.id}>
            <Link href={`/posts/${el.id}`}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
