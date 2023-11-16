import Image from "next/image.js";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Karen
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.11.2023</td>
            <td>$980</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://images.unsplash.com/photo-1664985363388-0e4bd2b5cdb6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Horace
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>11.11.2023</td>
            <td>$1.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://picsum.photos/seed/ZgsaCy8/640/480"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Mildred Greenholt
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>11.11.2023</td>
            <td>$320</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1699796414302-b34941b175ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                testUserAction
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>10.11.2023</td>
            <td>$510</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
