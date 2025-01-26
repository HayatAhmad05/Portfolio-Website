import React from "react";
import styles from "./Contact.module.css";
import { LuPhone } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";
import Clock from 'react-clock'


export const Contact = () => {
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.contactHeader}>
                <h1>Let's get in touch.</h1>
                <p>Send me an email and I will get back to you as soon as possible.</p>
            </div>

            <div className={styles.contactForm}>
                <form>
                    <div className={styles.formRow}>
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                    </div>
                    <textarea placeholder="Your message" rows={4} />
                    <button type="submit" className={styles.sendButton}>
                        Send Message
                    </button>
                </form>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.details}>
                    <h2>Contact Details</h2>
                    <div className={styles.contacticon}>
                        <LuPhone />
                        <p>+1 647 938 5883</p>
                    </div>
                    <div className={styles.contacticon}>
                        <FaEnvelope />
                        <a href="mailto:sayed.hayat05@hotmail.com">sayed.hayat05@hotmail.com</a>
                    </div>

                </div>

                <div className={styles.spaces}>
                    <h2>My Digital Spaces</h2>
                    <ul>
                        <li><FaGithub /><a href="https://github.com/HayatAhmad05">Github</a></li>
                        <li><FaLinkedin /><a href="https://www.linkedin.com/in/sayed-hayat-ahmad-31ba84257/">LinkedIn</a></li>
                        <li><FaItchIo /><a href="https://hayatahmad.itch.io/">itch.io</a></li>
                    </ul>
                </div>

            </div>
        </section>
    );
};
