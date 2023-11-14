import Image from "next/image";
import styles from "@/app/ui/dashboard/users/viewUserDetail/viewUser.module.css";

const ViewUserDetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="no avatar" fill />
        </div>
        Brian Brown
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Brian Brown" />
          <label>Email</label>
          <input type="email" name="email" placeholder="brian@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0123456789" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Germany" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default ViewUserDetailPage;
