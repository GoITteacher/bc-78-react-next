"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useProductStore } from "@/stores/productStore";

export default function AppHeader() {
  const bucketItems = useProductStore((s) => s.bucket);

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket ({bucketItems.length})</Link>
        </li>
      </ul>
    </header>
  );
}
