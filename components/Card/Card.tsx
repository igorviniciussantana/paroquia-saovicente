import Link from "next/link";
import { CalendarBlank, IconProps, ClipboardText } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  icon: boolean;
  link: string;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <Link href={props.link} className={styles.card}>
      <div>
        {props.icon ? (
          <CalendarBlank weight="fill" color="#D49672" size={32}/>
        ) : (
          <ClipboardText weight="fill" color="#D49672" size={32}/>
        )}
      </div>
      <p>{props.title}</p>
    </Link>
  );
}
