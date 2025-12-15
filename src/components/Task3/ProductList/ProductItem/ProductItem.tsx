import { Product } from "../../../../types/product";
import css from "./ProductItem.module.css";

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <div className={css["productItem"]}>
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      <p>{item.category}</p>
    </div>
  );
};

export default ProductItem;
