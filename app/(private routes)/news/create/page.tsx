"use client";

import styles from "./forms/formLayout.module.css";

const newsTypes = ["updates", "news", "testimonials", "video stories"];
const accountTypes = ["freeUser", "paidUser", "agencyUser"];

export default function NewsCreatePage() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.description}>
            Compose the fields expected by /news POST.
          </p>
          <h1 className={styles.title}>New story</h1>
        </div>

        <form className={styles.form}>
          <label className={styles.label}>
            Topic
            <input
              className={styles.input}
              name="topic"
              type="text"
              placeholder="Auth refresh policy"
              required
            />
          </label>
          <label className={styles.label}>
            Text
            <textarea
              className={styles.textarea}
              name="text"
              placeholder="Share the update copy..."
              required
            />
          </label>
          <label className={styles.label}>
            Type
            <select
              className={styles.select}
              name="type"
              defaultValue={newsTypes[0]}
            >
              {newsTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Account type
            <select
              className={styles.select}
              name="typeAccount"
              defaultValue={accountTypes[0]}
            >
              {accountTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <button className={styles.button} type="submit">
            Create story
          </button>
        </form>
      </main>
    </div>
  );
}
