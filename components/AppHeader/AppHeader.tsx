"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useEffect } from "react";

export default function AppHeader() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>
    </header>
  );
}
