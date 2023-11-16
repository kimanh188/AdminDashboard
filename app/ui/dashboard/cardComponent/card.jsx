import { MdSupervisedUserCircle } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import styles from "./card.module.css";

export const CardTotalUser = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      {
        <div className={styles.texts}>
          <span className={styles.title}>Total User</span>
          <span className={styles.number}>10.242</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than previous week
          </span>
        </div>
      }
    </div>
  );
};

export const CardMonthlyRevenue = ({ item }) => {
  return (
    <div className={styles.container}>
      <FaMoneyCheckAlt size={24} />
      {
        <div className={styles.texts}>
          <span className={styles.title}>Monthly Revenue</span>
          <span className={styles.number}>$9.540</span>
          <span className={styles.detail}>
            <span className={styles.positive}>8%</span> more than previous week
          </span>
        </div>
      }
    </div>
  );
};
