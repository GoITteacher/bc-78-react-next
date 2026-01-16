# Заняття 18 - Auth

1. Налаштування serverConfig для BFF і глобального сервера
1. Створити BFF для login та register
1. Підключити запити до форми логіну
1. Створити AuthProvider зі стором для рефрешу
1. Свторити proxy.ts для приватних і публічних маршрутів

test1@gmail.com qwerty

---

Cookies

```ts
try {
  const res = await globalApi.post("/auth/login", body);

  const cookieStore = await cookies();
  const setCookie = res.headers["set-cookie"];

  if (setCookie) {
    // Примусово робимо масив
    const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

    // Проходимось по масиву та парсимо кожне значення
    // щоб отримати результат у вигляді обʼєкту
    for (const cookieStr of cookieArray) {
      const parsed = parse(cookieStr);
      // Створюємо налаштування для cookies
      const options = {
        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
        path: parsed.Path,
        maxAge: Number(parsed["Max-Age"]),
      };

      // Методом cookieStore.set додаємо кукі до нашого запиту
      if (parsed.accessToken) {
        // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
        cookieStore.set("accessToken", parsed.accessToken, options);
      }
      if (parsed.refreshToken) {
        cookieStore.set("refreshToken", parsed.refreshToken, options);
      }
    }

    return NextResponse.json(res.data);
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
} catch (err) {
  const error = err as ApiError;
  return NextResponse.json(
    {
      error: error.response?.data.error || error.message,
    },
    {
      status: error.status,
    }
  );
}
```

---
