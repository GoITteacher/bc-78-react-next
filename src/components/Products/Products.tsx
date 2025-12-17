import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import ProductList from "./ProductList/ProductList";
import css from "./Products.module.css";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Flex } from "antd";
import { getProducts } from "../../services/productService";
import ProductPagination from "./ProductPagination/ProductPagination";

const Products = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);

  useEffect(() => {
    if (query != "" && page > 0 && page <= totalPage) {
      getProducts({ keyword: query, page: page }).then((data) => {
        setTotalPages(data.totalPages);
        setItems(data.results);
      });
    }
  }, [query, page, totalPage]);

  const updateQuery = (name: string) => {
    setPage(1);
    setQuery(name);
  };

  return (
    <Flex className={css["products"]} vertical>
      <SearchProduct updateQuery={updateQuery} />
      <ProductList items={items} />
      <ProductPagination page={page} setPage={setPage} totalPage={totalPage} />
    </Flex>
  );
};

export default Products;
