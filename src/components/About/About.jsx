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
                        <p>Possuo conehcimentos em algums tecnologias do front end como Html/CSS, JavaScript e React</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Icone de um servidor" />
                    <div className={styles.aboutItemText}>
                        <h3>Back End</h3>
                        <p>Possuo conehcimentos em algums tecnologias do back end como Python, Java e Spring Boot</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Icone de uma tela" />
                    <div className={styles.aboutItemText}>
                        <h3>Outros</h3>
                        <p>Possuo conehcimentos com banco de dados relacionais (SQL), além de ja ter programado em Haskell e Prolog</p>
                    </div>
                </li>
            </ul>
        </div>
     </section>
    );
};