import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <div>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
