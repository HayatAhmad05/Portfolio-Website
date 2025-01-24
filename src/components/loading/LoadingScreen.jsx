import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <motion.div
            className={styles.loadingScreen}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className={styles.loadingContainer}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    className={styles.loadingCircle}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <h1>HA</h1>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen; 
