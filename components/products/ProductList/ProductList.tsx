"use client";

import { useProductStore } from "@/stores/productStore";
import css from "./ProductList.module.css";
import ProductItem from "./ProductItem/ProductItem";
import { Product } from "@/types/products";

interface ProductListProps {
  products?: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const defaultProducts = useProductStore((s) => s.products);
  const items = products || defaultProducts;

  return (
    <div className={css["productList"]}>
      <ul className={css["list"]}>
        {items.map((el) => {
          return (
            <li className={css["listItem"]} key={el._id}>
              <ProductItem product={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
