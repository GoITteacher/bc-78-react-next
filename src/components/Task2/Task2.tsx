import { useState } from "react";
import { fetchAllPosts } from "../../services/postService";
import { GetPostsParams, Post } from "../../types/post";
import PostList from "./PostList/PostList";
import SearchForm from "./SearchForm/SearchForm";
import css from "./Task2.module.css";

const Task2 = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (res: GetPostsParams) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await fetchAllPosts(res);
      setItems(data.posts);
    } catch {
      setIsError(true);
      setItems([]);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["task2"]}>
      <SearchForm onSubmit={handleSubmit} />
      <PostList items={items} />
      {isLoading && <p className={css["status"]}>Loading ...</p>}
      {isError && (
        <p className={`${css["status"]} ${css["statusError"]}`}>Error!!!</p>
      )}
    </div>
  );
};

export default Task2;
