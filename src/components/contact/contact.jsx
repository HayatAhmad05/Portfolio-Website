import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { LuPhone } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hutamwk',          // Service ID (as string)
            'template_1yqkl9u',         // Template ID (as string)
            form.current,
            'DYki2_pjhhYMJFyEy'         // Public Key (as string)
        )
            .then((result) => {
                alert("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <section id="contact" className={styles.container}>
            <div className={styles.contactHeader}>
                <h1>Let's Get in Touch</h1>
                <p>Send me a message and I'll respond within 24 hours</p>
            </div>

            <div className={styles.contactForm}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.formRow}>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your name"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                    />
                    <button type="submit" className={styles.sendButton}>
                        Send Message
                    </button>
                </form>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.details}>
                    <h2>Contact Details</h2>
                    <div className={styles.contacticon}>
                        <LuPhone className={styles.icon} />
                        <p>+1 647 938 5883</p>
                    </div>
                    <div className={styles.contacticon}>
                        <a href="mailto:sayed.hayat05@hotmail.com" className={styles.emailLink}>
                            <FaEnvelope className={styles.icon} />
                            sayed.hayat05@hotmail.com
                        </a>
                    </div>
                </div>

                <div className={styles.spaces}>
                    <h2>Digital Spaces</h2>
                    <div className={styles.iconContainer}>
                        <a href="https://github.com/HayatAhmad05" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <a href="https://www.linkedin.com/in/sayed-hayat-ahmad-31ba84257/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon} />
                        </a>
                        <a href="https://hayatahmad.itch.io/" target="_blank" rel="noopener noreferrer">
                            <FaItchIo className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};