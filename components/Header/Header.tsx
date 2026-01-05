import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1>Вступна теорія про Next.js для швидкого старту</h1>
      <p>
        Зрозумійте, як працює фреймворк: маршрутизація, рендеринг, компоненти та
        базові принципи створення сучасних React-застосунків.
      </p>
      <div>
        <button type="button">Почати навчання</button>
        <button type="button">Переглянути приклади</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Index.html</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/user-profile">User Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
