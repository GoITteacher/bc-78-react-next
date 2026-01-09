import { Suspense } from "react";

import css from "./layout.module.css";

export default function Layout({
  content,
  sidebar,
}: Readonly<{
  content: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <section className={css.page}>
      <aside className={css.sidebar}>
        <Suspense fallback={<div>Loading Categories</div>}>{sidebar}</Suspense>
      </aside>
      <div className={css.content}>{content}</div>
    </section>
  );
}
