import Head from "next/head";
import Image from "next/image";
import styles from "./createEvent.module.scss";
import {MonumentBlack, MonumentLight, newYork} from '../../../src/imports'
import { CalendarBlank, ClipboardText } from "phosphor-react";

interface createEventModalProps{
    display: string;
}

export default function CreateEventModal(props: createEventModalProps) {
  return (
    <div className={styles.createEventWrapper} style={{display: props.display}}>
    

      
    </div>
  );
}
