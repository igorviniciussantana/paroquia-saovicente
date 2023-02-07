import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Table from "../components/Table/Table";
import {MonumentBlack, MonumentLight, newYork} from '../src/imports'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Calendário Litúrgico 2023 - Paróquia São Vicente</title>
        <meta
          name="description"
          content="Calendário Litúrgico da Paróquia São Vicente para o ano de 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgImage}></div>
      <main className={styles.main}>
      <Header title='Calendário Litúrgico'/>
        

        <h2 className={`${MonumentBlack.className} ${styles.yearTitle}`}>
          2023
        </h2>
        <Table />
        <Footer />
      </main>

      
    </>
  );
}
