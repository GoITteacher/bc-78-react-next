import css from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={css.page}>
      <div className={css.content}>{children}</div>
    </section>
  );
}
