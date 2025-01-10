import React, {useState} from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";
import Donut from "../Donut/donut";

export const Navbar = () => {
    const [menuOpen,SetMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>Portfolio</div>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src= {menuOpen ? "/assets/nav/close.png" : "/assets/nav/menu.png"} alt="menu button" onClick={() => SetMenuOpen(!menuOpen)}></img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li><a href= "#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href= "#projects">Projects</a></li>
                    <li><a href= "#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};