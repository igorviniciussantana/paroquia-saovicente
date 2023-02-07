import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Agenda.module.scss";
import Table from "../components/Table/Table";
import { MonumentBlack, MonumentLight, newYork } from "../src/imports";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import CreateEventModal from "../components/Event/createEventModal/createEvent";
import { GetServerSideProps } from "next";
import { api } from "./api/api";
import Router from "next/router";
import UpdateEventModal from "../components/Event/updateEventModal/updateEvent";

interface EventsAtribute {
  name: string;
  Data: string;
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
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const [updateName, setUpdateName] = useState('');
  const [updateDate, setUpdateDate] = useState('');
  const [updateId, setUpdateId] = useState(0);



  function showEventModal() {
    setIsModalOpen(!isModalOpen);
  }

  function showUpdateEventModal(id : number, name : string, date : string) {
    setIsUpdateOpen(!isUpdateOpen);
    setUpdateName(name);
    setUpdateId(id)
    setUpdateDate(date)
  }

  const deleteEvent = async function (id: number) {
    const response = await api
      .delete(`events/${id}`)
      .then((response) => alert("Evento excluido"))
      .catch((err) => alert("Houve um erro"))
      .finally(() => Router.reload());
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
        <UpdateEventModal 
        display={isUpdateOpen ? "flex" : "none"}
        id={updateId}
        name={updateName}
        date={updateDate}
        modalChanger={e => showUpdateEventModal(updateId, updateName, updateDate)}
        />

        <div className={styles.row}>
          <div className={styles.rowElement} id={styles.name}>
            Nome
          </div>
          <div className={styles.rowElement} id={styles.data}>
            Data
          </div>
          <div className={styles.rowElement} id={styles.action}>
            Ações
          </div>
        </div>
        {events.map((event) => {
          return (
            <div key={event.id} className={styles.row}>
              <span className={styles.rowElement} id={styles.name}>
                {event.attributes.name}
              </span>
              <span className={styles.rowElement} id={styles.data}>
                {new Date(event.attributes.Data).toLocaleString("pt-BR")}
              </span>
              <div className={styles.rowElement} id={styles.action}>
                <button onClick={(e) => showUpdateEventModal(event.id, event.attributes.name, event.attributes.Data)}>Editar</button>
                <button onClick={(e) => deleteEvent(event.id)}>Deletar</button>
              </div>
            </div>
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
