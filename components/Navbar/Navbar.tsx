"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { NavbarProps } from "./Navbar.prop";
import clsx from "clsx";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

export default function Navbar({
  className,
  ...props
}: NavbarProps): JSX.Element {
  const cartCounter = useSelector((state: AppState) => state.cartSlice.counter);
  return (
    <nav className={clsx(className)} {...props}>
      <ul className={styles.wrapper}>
        <Link href={""}>
          <li>
            <Image
              src={"/icon/headerIcon/cart.svg"}
              width={30}
              height={30}
              alt={"cart"}
            />
            Корзина
          </li>
        </Link>
        <Link href={""}>
          <li>
            <Image
              src={"/icon/headerIcon/favSvg.svg"}
              width={30}
              height={30}
              alt={"fav"}
            />
            Избранное
          </li>
        </Link>
        <Link href={""}>
          <li>
            <Image
              src={"/icon/headerIcon/userSvg.svg"}
              width={30}
              height={30}
              alt={"user"}
            />
            Профиль
          </li>
        </Link>
      </ul>
    </nav>
  );
}
