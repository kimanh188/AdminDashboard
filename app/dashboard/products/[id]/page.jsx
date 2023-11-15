import Image from "next/image";
import { fetchSingleProduct } from "@/app/data/fetchProducts.js";
import styles from "@/app/ui/dashboard/products/viewProductDetail/viewProduct.module.css";

const ViewProductDetailPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.png"} alt="product img" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size || "size"} />
          <label>Category</label>
          <select name="category" id="category">
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="kitchen">Kitchen</option>
            <option value="appliances">Household appliances</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" placeholder={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductDetailPage;
