import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Link from "next/link";
import Search from "../SearchHeader/Search";
import Image from "next/image";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          <Image
            className={styles.img_logo}
            src="/logo.svg"
            width={150}
            height={69}
            alt="logo"
          />
        </Link>
        <ButtonMenu className={styles.header_button} appearance="primary">
          Каталог
        </ButtonMenu>
        <Search className={styles.search}></Search>
        <Navbar className={styles.navbar} />
      </div>
    </header>
  );
}
