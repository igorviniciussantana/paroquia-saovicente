import Head from "next/head";
import Image from "next/image";
import styles from "./updateEvent.module.scss";
import { MonumentBlack, MonumentLight, newYork } from "../../../src/imports";
import { CalendarBlank, ClipboardText, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { api } from "../../../pages/api/api";
import { GetServerSideProps } from "next";
import  Router  from "next/router";

interface updateEventModalProps {
  display: string;
  modalChanger: (id: number, name : string, date: string) => void;
  id: number;
  name: string;
  date: string
}

export default function UpdateEventModal(props: updateEventModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (event: any) => {
    console.log(event);
    const response = await api
      .put(
        `/events/${props.id}`,
        {
          data: {
            name: event.name,
            Data: event.Data,
            Time: event.Data,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((e) => alert("Evento atualizado com sucesso"))
      .catch((err) => alert("Houve um erro. Tente de novo"))
      .finally(() => Router.reload());
  };

  return (
    <div
      className={styles.createEventWrapper}
      style={{ display: props.display }}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={styles.formHeader}>
        <X weight="fill" color="#471F08" size={32} onClick={e => props.modalChanger(0, '', '')} className={styles.closeButton}/>
        <h1>Editar Evento</h1>
        </div>

        <label>Nome do Evento</label>
        <input
          placeholder="Insira o nome do evento"
          defaultValue={props.name}
          {...register("name", { required: true })}
        />
        {errors.name && <p>O nome não pode estar vazio</p>}

        <label>Data do Evento</label>
        <input
          type="datetime-local"
          {...register("Data", { required: true })}
        />
        {errors.Data && <p>A data não pode estar vazia</p>}

        <input type="submit" value='Atualizar'/>
      </form>
    </div>
  );
}
