import { Product } from "../../../types/product";
import ProductItem from "./ProductItem/ProductItem";
import css from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={css["productList"]}>
      <ul>
        {products.map((item) => {
          return (
            <li key={item._id}>
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
