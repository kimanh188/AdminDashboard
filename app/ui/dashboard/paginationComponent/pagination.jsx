"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;

  const resultPerPage = 5;
  const totalPages = Math.ceil(count / resultPerPage);

  const params = new URLSearchParams(searchParams);

  const hasPrev = resultPerPage * (parseInt(page) - 1) > 0;
  const hasNext = resultPerPage * (parseInt(page) - 1) + resultPerPage < count;

  const changePageHandler = (action) => {
    action === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => changePageHandler("prev")}
      >
        Previous
      </button>
      <div className={styles.page}>
        Page {page} of {totalPages}
      </div>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => changePageHandler("next")}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
