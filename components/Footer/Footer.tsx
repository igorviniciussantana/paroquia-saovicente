import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./images/igor.svg" alt="" className={styles.logo}/>
      <p>
        Desenvolvido por{" "}
        <Link href="https://github.com/igorviniciussantana" target="_blank">
          Igor Vinicius.
        </Link>
      </p>
    </footer>
  );
}
