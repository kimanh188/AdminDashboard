"use client";
import { useFormState } from "react-dom";

import { authenticateLogin } from "@/app/serverActions/loginAuth.js";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticateLogin, undefined);

  return (
    <div>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
