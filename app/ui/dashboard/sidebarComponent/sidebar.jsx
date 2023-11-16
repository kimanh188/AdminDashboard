import Image from "next/image.js";
import MenuPath from "./menuPath/menuPath.jsx";
import { auth, signOut } from "@/app/auth.js";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        subtitle: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        subtitle: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        subtitle: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        subtitle: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        subtitle: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        subtitle: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        subtitle: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        subtitle: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        subtitle: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();

  console.log("User Object:", user);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImg}
          src={user.img || "/noavatar.png"}
          alt="avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title} className={styles.listItem}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuPath item={item} key={item.subtitle} />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
