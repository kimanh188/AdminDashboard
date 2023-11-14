import Image from "next/image";
import styles from "@/app/ui/dashboard/products/viewProductDetail/viewProduct.module.css";

const ViewProductDetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="no product symbol" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="1.300" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="39" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="size" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="kitchen">Kitchen</option>
            <option value="appliances">Household appliances</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Lorem ipsum dolor sit amet consectetur."
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductDetailPage;
