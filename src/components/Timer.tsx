/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Запустити інтервал");

    const id = setInterval(() => {
      setTime(new Date());
      console.log("Hello", Date.now());
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Видалення інтервалу", id);
    };
  }, []);

  useEffect(() => {
    console.log("Народження");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Помираємо");
    };
  }, []);

  return (
    <p>
      <h1>Timer</h1>
      {time.toLocaleTimeString()}
    </p>
  );
}
