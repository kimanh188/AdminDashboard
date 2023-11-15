import Link from "next/link.js";
import Image from "next/image.js";
import { fetchUsers } from "@/app/data/fetchUsers.js";
import Search from "@/app/ui/dashboard/searchComponent/search.jsx";
import Pagination from "@/app/ui/dashboard/paginationComponent/pagination.jsx";
import styles from "@/app/ui/dashboard/users/users.module.css";

const UsersPage = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  //console.log(query);

  const users = await fetchUsers(query);

  //console.log(users);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImg}
                    src={user.img || "/noavatar.png"}
                    alt="no avatar"
                    width="40"
                    height="40"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 15)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "inactive"}</td>
              <td>
                <div className={styles.buttonGroup}>
                  <Link href={`/dashboard/users/${user.id}`}>
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
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};
export default UsersPage;
