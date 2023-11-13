import Image from "next/image.js";
import MenuPath from "./menuPath/menuPath.jsx";
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

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImg}
          src="/noavatar.png"
          alt="no-avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Brian Brown</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuPath item={item} key={item.subtitle} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
