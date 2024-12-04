import React from "react";
import { getImageUrl } from "../../utils";
import { getPdfUrl } from "../../utils";
import styles from "./Hero.module.css";
import curriculo from "../../../assets/pdfs/curriculo-hildon-neto.pdf"

export const Hero = () => {
    return (
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Olá! Me chamo Hildon!</h1>
            <p className={styles.description}>Tenho 20 anos e atualmente estou no 6º período do curso de Ciências da Computação da Universade Federal de Campina Grande (UFCG).</p>
            <a className={styles.curriculoBtn} href={curriculo} download="curriculo-hildon-neto.pdf">Veja o meu currículo</a>
        </div>
        <img className={styles.foto} src={getImageUrl("hero/foto-hildon.png")} alt="Uma foto minha" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
};