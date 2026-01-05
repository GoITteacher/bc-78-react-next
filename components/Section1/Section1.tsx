import css from "./Section1.module.css";

const Section1 = ({ title }: { title: string }) => {
  return (
    <section className={css.howNext}>
      <h2>Як влаштований Next.js {title}</h2>
      <ol>
        <li>Проєкт будується на React, але має власну структуру.</li>
        <li>Маршрути формуються з файлової системи.</li>
        <li>Рендеринг обирається під задачу: SSR, SSG або CSR.</li>
      </ol>
    </section>
  );
};

export default Section1;
