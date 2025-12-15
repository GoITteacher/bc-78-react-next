import { useState } from "react";
import ProductList from "./ProductList/ProductList";
import SearchProductForm from "./SearchProductForm/SearchProductForm";
import css from "./Task3.module.css";
import { Product, SearchProductParams } from "../../types/product";
import { serachProducts } from "../../services/productService";

const Task3 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (params: SearchProductParams) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await serachProducts(params);
      setProducts(data.results);
    } catch {
      setIsError(true);
      setProducts([]);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["task3"]}>
      <SearchProductForm onSubmit={handleSubmit} />
      <SearchProductForm onSubmit={handleSubmit} />
      <SearchProductForm onSubmit={handleSubmit} />
      <ProductList products={products} />
    </div>
  );
};

export default Task3;
