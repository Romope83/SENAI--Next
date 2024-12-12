'use client';
import styles from "./titulo.module.css"

export default function Titulo({titulo}:{titulo: string}){
    console.log("Titulo renderizado no cliente");
    return(
    <h1 className={styles.titulos_principal}>{titulo}</h1>
    );
}