"use client";

import styles from "../authForm.module.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.overline}>Welcome back</p>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.description}>
            Enter the credentials you used when registering.
          </p>
        </div>

        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="••••••••"
            />
          </label>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
