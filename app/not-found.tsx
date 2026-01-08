"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <main>
      <p>404 | NotFound</p>
      <Link href="/">Back to HomePage</Link>
      <p>Через 3 секунди вас буде перенаправлено на головну сторінку</p>
    </main>
  );
};

export default NotFound;
