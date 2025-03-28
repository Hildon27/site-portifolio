import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
     <section id="about" className={styles.container}>
        <h2 className={styles.title}>Sobre mim</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Icone de um cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Front End</h3>
                        <p>Tenho experiência em desenvolvimento front-end utilizando HTML, CSS e React, criando interfaces modernas, responsivas e dinâmicas.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Icone de um servidor" />
                    <div className={styles.aboutItemText}>
                        <h3>Back End</h3>
                        <p>Desenvolvo aplicações back-end com Java, Spring Boot e Python, focando em performance, segurança e boas práticas.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Icone de uma tela" />
                    <div className={styles.aboutItemText}>
                        <h3>Outros</h3>
                        <p>Possuo conhecimento em bancos de dados relacionais (SQL) e já tive contato com linguagens funcionais como Haskell e Prolog.</p>
                    </div>
                </li>
            </ul>
        </div>
     </section>
    );
};