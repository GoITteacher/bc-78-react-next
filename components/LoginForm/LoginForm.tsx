"use client";
import { FormEvent } from "react";
import { loginUser } from "@/lib/auth";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await loginUser(email, password);
      console.log(res);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className={css["loginForm"]}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
