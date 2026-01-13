import { Product } from "@/types/products";
import css from "./WishlistBtn.module.css";
import { useProductStore } from "@/stores/productStore";

const WishlistBtn = ({ product }: { product: Product }) => {
  const addToWishlist = useProductStore((s) => s.addProductToWishList);
  const removeFromWishlist = useProductStore(
    (s) => s.removeProductFromWishList
  );
  const wishlistItems = useProductStore((s) => s.wishlist);
  const wishlistHasItem = wishlistItems.some((el) => el._id === product._id);

  const handleClick = () => {
    if (wishlistHasItem) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button onClick={handleClick}>{wishlistHasItem ? "Remove" : "Add"}</button>
  );
};

export default WishlistBtn;
