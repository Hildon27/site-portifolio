import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
        <p>Entre em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>  
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hildonrnneto@gmail.com" target="_blank">hildonrnneto@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Hildon27" target="_blank">github.com/Hildon27</a>
        </li>
      </ul>
    </footer>
  );
};