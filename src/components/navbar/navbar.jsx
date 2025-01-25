import React, {useState} from "react";
import styles from "./navbar.module.css";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [menuOpen,SetMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <motion.div
                className={styles.title}
                initial={{ opacity: 0, y: -20 }} // Starts invisible and slides up
                animate={{ opacity: 1, y: 0 }} // Fades in and returns to normal position
                transition={{ duration: 0.5 }} // Smooth animation lasting 0.5 seconds
            >
                Hayat Ahmad
            </motion.div>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src= {menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"} alt="menu button" onClick={() => SetMenuOpen(!menuOpen)}></img>
                <motion.div
                    initial={{ opacity: 0, y: -20 }} // Starts invisible and slightly slid up
                    animate={{ opacity: 1, y: 0 }} // Fades in and slides to its normal position
                    exit={{ opacity: 0, y: -20 }} // Fades out and slides up when it exits
                    transition={{ duration: 0.5, ease:"easeInOut" }} // Smooth transition
                >
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                        <motion.li
                            whileHover={{ scale: 1.1 }} // Slight hover scale effect for each item
                            transition={{ duration: 0.2 }} // Smooth scaling animation
                        >
                            <a href="#about">About</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="#experience">Experience</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="#projects">Projects</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="#contact">Contact</a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="/public/assets/Resume-WW.pdf" className={styles.resume}>Resume</a>
                        </motion.li>
                    </ul>
                </motion.div>


            </div>
        </nav>
    )
};