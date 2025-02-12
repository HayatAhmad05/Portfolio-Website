import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import styles from "./hero.module.css";
import ModelViewer from "../model-viewer/model-viewer";
import { motion } from 'framer-motion';

export const Hero = () => {
    const words = ["Hayat Ahmad", "a Developer", "an Engineer"]; // Words to display
    const typingSpeed = 150; // Speed for typing each character (ms)
    const deletingSpeed = 100; // Speed for deleting each character (ms)
    const delayBetweenWords = 1000; // Delay before starting to delete (ms)

    const [text, setText] = useState(""); // Current text displayed
    const [wordIndex, setWordIndex] = useState(0); // Current word index
    const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;

        if (!isDeleting && text !== currentWord) {
            // Typing state: Add one character at a time
            timeout = setTimeout(() => {
                setText((prev) => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        } else if (isDeleting && text !== "") {
            // Deleting state: Remove one character at a time
            timeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else if (!isDeleting && text === currentWord) {
            // Pause before deleting
            timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && text === "") {
            // Move to the next word and start typing
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length); // Cycle through words
        }

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [text, isDeleting, wordIndex, words]);

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const descVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
    };

    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <article>
                    <h1 className={styles.title}>
                        Hi, Im <span className={styles.text}>{text}</span>
                        <span className={styles.cursor}></span>
                    </h1>
                </article>
                <p className={styles.desc}>
                    Computer Engineering @ University of Waterloo
                </p>



               <div className={styles.iconRow}>
                    <a href="https://github.com/HayatAhmad05" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sayed-hayat-ahmad-31ba84257/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:sayed.hayat05@hotmail.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaEnvelope />
                    </a>
               </div>
            </div>

            <div className={styles.model}>
                <ModelViewer />
            </div>

            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </section>
    );
};