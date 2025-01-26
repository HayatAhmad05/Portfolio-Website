import React, { useEffect, useState } from "react";
import styles from "./about.module.css"

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        });
        observer.observe(document.querySelector("#about"));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.container} id="about">
            <h2 className={`${styles.title} ${isVisible ? styles.animateTitle : ''}`}>About Me :</h2>

            <div className={styles.content}>
                <img src="/pfp.png" className={`${styles.aboutimg} ${isVisible ? styles.animateImage : ''}`} alt="Profile" />
                <div className={`${styles.aboutme} ${isVisible ? styles.animateText : ''}`}>
                    <h3>A brief intro, Who am I ?</h3>
                    <p className={styles.abouttext}>
                        I'm Hayat, a first year student currently
                        at the University of Waterloo studying
                        Computer Engineering.
                        <br /><br />
                        When Im not studying, I enjoy tinkering around
                        with microcontrollers and spending time working
                        on projects that involve PCB design and hardware.
                        <br /><br />
                        You can find my past experiences and some of my personal projects from the past year below
                        as well as their github repositories.
                    </p>
                </div>
            </div>
        </section>
    );
};
