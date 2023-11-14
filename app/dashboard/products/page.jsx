import Link from "next/link.js";
import Image from "next/image.js";
import Search from "@/app/ui/dashboard/searchComponent/search.jsx";
import Pagination from "@/app/ui/dashboard/paginationComponent/pagination.jsx";
import styles from "@/app/ui/dashboard/products/products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="no product symbol"
                  width={40}
                  height={40}
                  className={styles.productImg}
                />
                Iphone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>$1.300</td>
            <td>14.11.2023</td>
            <td>39</td>
            <td>
              <div className={styles.buttonGroup}>
                <Link href={"/dashboard/products/test"}>
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

export default ProductsPage;
