"use client";
import { usePathname } from "next/navigation.js";
import Link from "next/link.js";

import styles from "./menuPath.module.css";

const MenuPath = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.subtitle}
    </Link>
  );
};
export default MenuPath;
