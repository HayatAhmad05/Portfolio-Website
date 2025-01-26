import React, { useState } from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.title} ${styles.animateTitle}`}>Hayat Ahmad</div>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"}
                    alt="menu button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <div
                    className={`${styles.menuContainer} ${
                        menuOpen ? styles.animateMenuIn : styles.animateMenuOut
                    }`}
                >
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                        <li>
                            <a href="#about" className={styles.hoverEffect}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className={styles.hoverEffect}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className={styles.hoverEffect}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={styles.hoverEffect}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/public/assets/Resume-WW.pdf" className={`${styles.resume} ${styles.hoverEffect}`}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};