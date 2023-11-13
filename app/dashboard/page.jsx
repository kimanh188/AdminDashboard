import Card from "../ui/dashboard/card/card.jsx";
import Transactions from "../ui/dashboard/transactions/transactions.jsx";
import Chart from "../ui/dashboard/chart/chart.jsx";
import NewsSidebar from "../ui/dashboard/news-sidebar-right/newsSidebar.jsx";
import styles from "../ui/dashboard/dashboard.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
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
