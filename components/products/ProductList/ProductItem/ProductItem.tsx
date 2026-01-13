import { Product } from "@/types/products";
import css from "./ProductItem.module.css";
import BucketBtn from "./BucketBtn/BucketBtn";
import WishlistBtn from "./WishlistBtn/WishlistBtn";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className={css["productItem"]}>
      <div className={css["meta"]}>
        <p className={css["name"]}>{product.name}</p>
        <p className={css["price"]}>{product.price}</p>
      </div>
      <img className={css["image"]} src={product.img} alt={product.name} />
      <div>
        <BucketBtn product={product} />
        <WishlistBtn product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
