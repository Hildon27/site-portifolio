import React from "react";
import styles from "./Hero.module.css";
import curriculo from "../../../assets/pdfs/hildon-curriculo.pdf";
import { Image } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá! Me chamo Hildon!</h1>
        <p className={styles.description}>
          Tenho 21 anos e atualmente estou no 6º período do curso de Ciências da
          Computação da Universade Federal de Campina Grande (UFCG).
        </p>
        <a
          className={styles.curriculoBtn}
          href={curriculo}
          download="hildon-curriculo.pdf"
        >
          Veja o meu currículo
        </a>
      </div>
      <Image
      className={styles.foto}
        src="https://github.com/Hildon27.png"
        alt="Minha foto"
        borderRadius="full" 
        boxSize="400px" //
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
