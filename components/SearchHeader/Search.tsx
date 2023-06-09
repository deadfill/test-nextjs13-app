"use client";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";

export default function Search({ ...props }: SearchProps): JSX.Element {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  // const openSearch = () => {
  //   setOpened(true);
  //   dispatch(setClose());
  // };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    // setOpened(false);
    setQuery("");
    router.push(`/search?q=${query}`);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={onSearch}>
          <input
            required
            value={query}
            // className={clsx(styles.seacrhInput, {
            //   [styles.seacrhInputShow]: opened,
            // })}
            {...props}
            placeholder="Я ищу"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </form>

        <div
        // onClick={() => setOpened(false)}
        // className={clsx(styles.cover, {
        //   [styles.coverShow]: opened,
        // })}
        />
        {/* <div
          className={clsx(styles.serchModal, {
            [styles.serchModalShow]: opened,
          })}
        ></div> */}
      </div>
    </>
  );
}
