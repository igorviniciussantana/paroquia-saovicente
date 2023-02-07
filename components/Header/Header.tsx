import { MonumentBlack, MonumentLight, newYork } from "../../src/imports";
import styles from "./Header.module.scss"

interface HeaderProps{
    title: string;
}

export default function Header(props: HeaderProps){
    return(
        <div className={styles.header}>
        <h1 className={`${newYork.className} ${styles.title}`}>{props.title}</h1>
        <h3 className={`${MonumentLight.className} ${styles.subtitle}`}>
          PARÓQUIA SÃO VICENTE DE PAULO - NOVA ANDRADINA/MS
        </h3>

        <img src="/images/sao-vicente.jpg" className={styles.saoVicenteImage} />
        </div>
    )
}