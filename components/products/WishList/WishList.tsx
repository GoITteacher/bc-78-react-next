"use client";
import { useProductStore } from "@/stores/productStore";
import ProductList from "../ProductList/ProductList";
import css from "./WishList.module.css";

const WishList = () => {
  const items = useProductStore((s) => s.wishlist);
  return <ProductList products={items} />;
};

export default WishList;
