import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { motion } from "framer-motion";

export const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.section
            className={styles.container}
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2 className={styles.title} variants={itemVariants}>Experience</motion.h2>
            <div className={styles.content}>
                <motion.div className={styles.skills} variants={containerVariants}>
                    {skills.map((skill, id) => (
                        <motion.div key={id} className={styles.skill} variants={itemVariants}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.ul className={styles.history} variants={containerVariants}>
                    {history.map((historyItem, id) => (
                        <motion.li key={id} className={styles.historyItem} variants={itemVariants}>
                            <img src={historyItem.imageSrc} alt={historyItem.organisation} />
                            <div className={styles.historyItemDetails}>
                                <h3>{historyItem.role}</h3>
                                <h4>{historyItem.organisation}</h4>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => (
                                        <motion.li key={id} variants={itemVariants}>{experience}</motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </motion.section>
    );
};
