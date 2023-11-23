"use client";

import { authenticateLogin } from "@/app/serverActions/authenticate.js";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <div>
      <form action={authenticateLogin} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
