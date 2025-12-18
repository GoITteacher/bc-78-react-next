import { useState } from "react";
import css from "./Products.module.css";
import Form from "./Form/Form";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProducts } from "../../services/productService";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["getProducts", { keyword: query, page }],
    queryFn: () => getProducts({ keyword: query, page }),
    enabled: query.trim() !== "",
    placeholderData: keepPreviousData,
  });

  const products = data?.results || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className={css["products"]}>
      <Form onSubmit={handleSubmit} />

      <ul>
        {products.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>

      <ReactPaginate
        breakLabel="-"
        nextLabel=">"
        onPageChange={({ selected }) => setPage(selected + 1)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className={css["paginatoin"]}
        activeClassName={css["active"]}
      />
    </div>
  );
};

export default Products;
