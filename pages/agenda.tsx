import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Table from "../components/Table/Table";
import { MonumentBlack, MonumentLight, newYork } from "../src/imports";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import CreateEventModal from "../components/Event/createEventModal/createEvent";
import { GetServerSideProps } from "next";
import { api } from "./api/api";

interface EventsAtribute {
  name: string;
  Data: string;
  Time: string;
}

interface Event {
  id: number;
  attributes: EventsAtribute;
}

interface AgendaProps {
  events: Event[];
}

export default function Agenda({ events }: AgendaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showEventModal() {
    setIsModalOpen(!isModalOpen);
  }

  const deleteEvent = async function (id: number) {
    const response = await api
      .delete(`events/${id}`)
      .then((response) => alert("Evento excluido"))
      .catch((err) => alert("Houve um erro"));
  };
  return (
    <>
      <Head>
        <title>Agenda - Paróquia São Vicente</title>
        <meta
          name="description"
          content="Calendário Litúrgico da Paróquia São Vicente para o ano de 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgImage}></div>
      <main className={styles.main}>
        <h1 className={`${newYork.className} ${styles.title}`}>Agenda</h1>
        <h3 className={`${MonumentLight.className} ${styles.subtitle}`}>
          PARÓQUIA SÃO VICENTE DE PAULO - NOVA ANDRADINA/MS
        </h3>

        <img src="/images/sao-vicente.jpg" className={styles.saoVicenteImage} />

        <button onClick={showEventModal}>Adicionar Evento</button>

        <CreateEventModal
          display={isModalOpen ? "flex" : "none"}
          modalChanger={showEventModal}
        />

        {events.map((event) => {
          return (
            <>
              <h1>{event.attributes.name}</h1>
              <h1>{new Date(event.attributes.Data).toLocaleString("pt-BR")}</h1>
              <button onClick={(e) => deleteEvent(event.id)}>Deletar</button>
            </>
          );
        })}
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/events");

  const eventsData = await response.data;

  return {
    props: {
      events: eventsData.data,
    },
  };
};
