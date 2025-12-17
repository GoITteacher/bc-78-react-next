import css from "./ProductPagination.module.css";

interface ProductPaginationProps {
  page: number;
  setPage: (x: number) => void;
  totalPage: number;
}

const ProductPagination = ({
  page,
  setPage,
  totalPage,
}: ProductPaginationProps) => {
  return (
    <div className={css["productPagination"]}>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Prev
      </button>
      <div>
        <p>{page}</p>
      </div>
      <button onClick={() => setPage(page + 1)} disabled={page >= totalPage}>
        Next
      </button>
    </div>
  );
};

export default ProductPagination;
