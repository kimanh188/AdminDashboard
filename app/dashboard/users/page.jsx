import Link from "next/link.js";
import Image from "next/image.js";
import Search from "@/app/ui/dashboard/searchComponent/search.jsx";
import Pagination from "@/app/ui/dashboard/paginationComponent/pagination.jsx";
import styles from "@/app/ui/dashboard/users/users.module.css";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new user</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImg}
                  src="/noavatar.png"
                  alt="no avatar"
                  width="40"
                  height="40"
                />
                Brian Brown
              </div>
            </td>
            <td>brian@gmail.com</td>
            <td>14.10.1995</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttonGroup}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>

                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};
export default UsersPage;
