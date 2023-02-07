import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Table from "../components/Table/Table";
import {MonumentBlack, MonumentLight, newYork} from '../src/imports'
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { CalendarBlank, ClipboardText } from "phosphor-react";
import Header from "../components/Header/header";




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
      <Header title='Página de Links'/>
       

        <Card icon={true} title='Acessar Calendário' link='/calendario' />
        <Card icon={false} title='Acessar Agenda' link='/agenda' />
        <Footer />
      </main>

      
    </>
  );
}
