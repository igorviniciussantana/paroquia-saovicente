import Head from "next/head";
import Image from "next/image";
import styles from "./createEvent.module.scss";
import { MonumentBlack, MonumentLight, newYork } from "../../../src/imports";
import { CalendarBlank, ClipboardText, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { api } from "../../../pages/api/api";
import { GetServerSideProps } from "next";
import  Router  from "next/router";

interface createEventModalProps {
  display: string;
  modalChanger: () => void;
}

export default function CreateEventModal(props: createEventModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (event: any) => {
    console.log(event);
    const response = await api
      .post(
        "/events",
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
      .then((e) => alert("Evento cadastrado com sucesso"))
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
        <X weight="fill" color="#471F08" size={32} onClick={props.modalChanger} className={styles.closeButton}/>
        <h1>Criar Evento</h1>
        </div>
        <label>Nome do Evento</label>
        <input
          placeholder="Insira o nome do evento"
          {...register("name", { required: true })}
        />
        {errors.name && <p>O nome não pode estar vazio</p>}
        <label>Data do Evento</label>

        <input
          type="datetime-local"
          {...register("Data", { required: true })}
        />
        {errors.Data && <p>A data não pode estar vazia</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
