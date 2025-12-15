import { Empty, Flex, Spin } from "antd";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import { fetchArticles } from "../../services/articleService";
import { useState } from "react";
import { Article } from "../../types/article";

const Task1 = () => {
  const [items, setItems] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (topic: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await fetchArticles(topic);
      setItems(data.hits);
    } catch {
      setIsError(true);
      setItems([]);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Flex vertical>
        <SearchForm onSubmit={handleSubmit} />
        {items.length > 0 && <ArticleList items={items} />}
        {isLoading && <Spin tip="Loading"></Spin>}
        {isError && <Empty description={false} />}
      </Flex>
    </div>
  );
};

export default Task1;
