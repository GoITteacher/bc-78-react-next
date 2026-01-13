"use client";
import { useProductStore } from "@/stores/productStore";
import ProductList from "../ProductList/ProductList";
import css from "./Bucket.module.css";

const Bucket = () => {
  const items = useProductStore((s) => s.bucket);
  return <ProductList products={items} />;
};

export default Bucket;
