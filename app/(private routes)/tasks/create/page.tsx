"use client";

import styles from "./formLayout.module.css";

const statuses = ["todo", "in-progress", "done"];

export default function TaskCreatePage() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div>
          <p className={styles.description}>
            Create a task entry that mirrors /tasks payload.
          </p>
          <h1 className={styles.title}>New task</h1>
        </div>

        <form className={styles.form}>
          <label className={styles.label}>
            Title
            <input
              className={styles.input}
              name="title"
              type="text"
              placeholder="Design auth flow"
              required
            />
          </label>
          <label className={styles.label}>
            Description
            <textarea
              className={styles.textarea}
              name="description"
              placeholder="Describe the goal, acceptance, and blockers."
            />
          </label>
          <label className={styles.label}>
            Status
            <select className={styles.select} name="status" defaultValue="todo">
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Due date
            <input className={styles.input} name="dueDate" type="date" />
          </label>
          <button className={styles.button} type="submit">
            Create task
          </button>
        </form>
      </main>
    </div>
  );
}
