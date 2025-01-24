import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { About } from './components/about/about'
import { Experience } from './components/experience/experience'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/contact'
import LoadingScreen from './components/loading/LoadingScreen'

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds loading time
    }, []);

    return (
        <div className={styles.App}>
            <AnimatePresence mode='wait'>
                {loading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <>
                        <Navbar />
                        <Hero /> 
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
