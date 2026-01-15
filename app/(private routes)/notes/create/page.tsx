"use client";

import styles from "../../forms/formLayout.module.css";

export default function NotesCreatePage() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.description}>Match the protected notes payload from the server.</p>
          <h1 className={styles.title}>New note</h1>
        </div>

        <form className={styles.form}>
          <label className={styles.label}>
            Title
            <input className={styles.input} name="title" type="text" placeholder="Client onboarding brief" required />
          </label>
          <label className={styles.label}>
            Content
            <textarea
              className={styles.textarea}
              name="content"
              placeholder="Add context, deliverables, and approvals."
              required
            />
          </label>
          <label className={styles.label}>
            Tags
            <input className={styles.input} name="tags" type="text" placeholder="onboarding, client" />
          </label>
          <label className={styles.label}>
            <span className={styles.checkboxRow}>
              <input type="checkbox" name="archived" />
              Archive note
            </span>
          </label>
          <button className={styles.button} type="submit">
            Create note
          </button>
        </form>
      </main>
    </div>
  );
}
