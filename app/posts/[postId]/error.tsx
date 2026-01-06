"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <main>
      <h2>Sorry</h2>
      <Link href="/">Back to home</Link>
    </main>
  );
};

export default Error;
