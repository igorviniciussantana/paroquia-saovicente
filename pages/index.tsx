import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Table from "../components/Table/Table";
import {MonumentBlack, MonumentLight, newYork} from '../src/imports'
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { CalendarBlank, ClipboardText } from "phosphor-react";




export default function Home() {
  return (
    <>
      <Head>
        <title>Paróquia São Vicente - Nova Andradina</title>
        <meta
          name="description"
          content="Página de Links da Paróquia São Vicente"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgImage}></div>
      <main className={styles.main}>
        <h1 className={`${newYork.className} ${styles.title}`}>
          Página de Links
        </h1>
        <h3 className={`${MonumentLight.className} ${styles.subtitle}`}>
          PARÓQUIA SÃO VICENTE DE PAULO - NOVA ANDRADINA/MS
        </h3>

        <img src="/images/sao-vicente.jpg" className={styles.saoVicenteImage} />

        <h2 className={`${MonumentBlack.className} ${styles.yearTitle}`}>
          2023
        </h2>
        <Card icon={false} title='Acessar Calendário' link='/calendario' />
        <Footer />
      </main>

      
    </>
  );
}
