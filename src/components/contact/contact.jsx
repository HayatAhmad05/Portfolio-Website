import React from "react";
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/mail.png" alt="Email icon" width="25px" />
          <a href="mailto:sayed.hayat05@hotmail.com">sayed.hayat05@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linked.png"alt="LinkedIn icon" width="25px"/>
          <a href="https://www.linkedin.com/in/sayed-hayat-ahmad-31ba84257/">linkedin.com/HayatAhmad</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/github.png" alt="Github icon" width="25px" />
          <a href="https://www.github.com/myname">github.com/HayatAhmad05</a>
        </li>
      </ul>
      <div className={styles.footerNote}>@ 2025 Hayat Ahmad</div> {/* Add the footer note */}
    </footer>
  );
};