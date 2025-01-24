import React, {useState} from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";
import Donut from "../Donut/donut";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [menuOpen,SetMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <motion.a href="/" className={styles.title} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }}>
                Hayat Ahmad
            </motion.a>
            
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"} 
                    alt="menu button" 
                    onClick={() => SetMenuOpen(!menuOpen)}
                />
                <motion.ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a className={styles.resume} href="/assets/Resume-WW.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </motion.ul>
            </div>
        </nav>
    )
};