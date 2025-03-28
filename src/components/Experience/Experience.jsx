import React from "react";
import { getImageUrl } from "../../utils";
import { Button, Box } from "@chakra-ui/react"; // Importando botões do Chakra UI
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
    return (
      <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experiências</h2>
      <div className={styles.content}>
        {/* Seção de Habilidades */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Seção de Projetos */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{historyItem.titulo}</h3>
                <ul>
                  {historyItem.experiencias.map((experiencia, index) => (
                    <li key={index}>{experiencia}</li>
                  ))}
                </ul>

                {/* Exibir botões apenas se os links existirem */}
                <Box mt={2} display="flex" gap={2}>
                  {historyItem.github && (
                    <Button
                      as="a"
                      href={historyItem.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="gray"
                    >
                      GitHub
                    </Button>
                  )}

                  {historyItem.site && (
                    <Button
                      as="a"
                      href={historyItem.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="blue"
                    >
                      Acessar Site
                    </Button>
                  )}
                </Box>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    );
  };