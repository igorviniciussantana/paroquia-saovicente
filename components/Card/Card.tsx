import Link from "next/link";
import { CalendarBlank, IconProps, ClipboardText } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import styles from "./Footer.module.scss";

interface CardProps{
    icon: boolean,
    link: string,
    title: string,
}

export default function Card(props: CardProps) {
  return (
    <Link href={props.link}>
<div>{props.icon ? <CalendarBlank/> : <ClipboardText />}</div>
    <p>{props.title}</p>
    </Link>

  );
}
