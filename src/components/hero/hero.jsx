import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import ModelViewer from "../model-viewer/model-viewer";

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

    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <article>
                    <h1 className={styles.title}>
                        Hi, I'm <span>{text}</span>
                        <span className={styles.cursor}></span>
                    </h1>
                </article>
                <p className={styles.desc}>
                    Computer Engineering @ University of Waterloo
                </p>

                <a href="/assets/Resume-WW.pdf" className={styles.contactbtn} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>

            <div className={styles.model}>
                <ModelViewer />
            </div>

            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </section>
    );
};
