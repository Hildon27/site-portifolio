import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portifolio</a>
        <div className={styles.menu}> 
            <img className={ styles.menuBtn }
             src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
                }
                 alt="botao-menu"
                 onClick={() => setMenuOpen(!menuOpen)}
                 />  
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#about">Sobre mim</a></li>

                <li><a href="#experience">Experiências</a></li>

                <li><a href="#contact">Contato</a></li>
            </ul>
        </div>
    </nav>
    );
};