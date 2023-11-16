import {
  CardTotalUser,
  CardMonthlyRevenue,
} from "../ui/dashboard/cardComponent/card.jsx";
import Transactions from "../ui/dashboard/transactions/transactions.jsx";
import Chart from "../ui/dashboard/chartComponent/chart.jsx";
import NewsSidebar from "../ui/dashboard/news-sidebarComponent/newsSidebar.jsx";
import styles from "../ui/dashboard/dashboard.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <CardTotalUser />
          <CardMonthlyRevenue />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <NewsSidebar />
      </div>
    </div>
  );
};

export default DashboardPage;
