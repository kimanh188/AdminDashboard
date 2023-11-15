"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchHandler = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    //if searched value exist then set params, if not then delete query
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
