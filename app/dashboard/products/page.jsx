import Link from "next/link.js";
import Image from "next/image.js";
import Search from "@/app/ui/dashboard/searchComponent/search.jsx";
import Pagination from "@/app/ui/dashboard/paginationComponent/pagination.jsx";
import { fetchProducts } from "@/app/data/fetchProducts.js";
import { deleteProduct } from "@/app/serverActions/productActions.js";
import styles from "@/app/ui/dashboard/products/products.module.css";

const ProductsPage = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  //console.log(query);

  const page = searchParams?.page || 1;

  const { countTotal, products } = await fetchProducts(query, page);

  //console.log(products);

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt="no product symbol"
                    width={40}
                    height={40}
                    className={styles.productImg}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 15)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttonGroup}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteProduct}>
                    <input type="hidden" name="productId" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={countTotal} />
    </div>
  );
};

export default ProductsPage;
