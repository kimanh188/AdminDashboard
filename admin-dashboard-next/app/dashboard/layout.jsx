import { Navbar } from "../ui/dashboard/navbar/navbar.component.jsx";
import { Sidebar } from "../ui/dashboard/sidebar/sidebar.component.jsx";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
