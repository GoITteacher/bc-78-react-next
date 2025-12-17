import { Product } from "../../../types/product";
import css from "./ProductList.module.css";

const ProductList = ({ items }: { items: Product[] }) => {
  return (
    <div className={css["productList"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <p>
                {item.name} - {item.price}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
