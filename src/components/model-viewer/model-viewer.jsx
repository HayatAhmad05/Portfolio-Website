import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModelViewer = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const modelViewer = document.querySelector('model-viewer');
        modelViewer.addEventListener('load', () => setIsLoaded(true));
        return () => {
            modelViewer.removeEventListener('load', () => setIsLoaded(true));
        };
    }, []);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                </motion.div>
            )}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                }}
            >
                <model-viewer
                    src="/assets/3D-Models/uno.glb"
                    alt="A 3D model"
                    auto-rotate
                    camera-controls
                    style={{ width: '90%', height: '500px' }}
                >
                </model-viewer>
            </motion.div>
        </AnimatePresence>
    );
};

export default ModelViewer;
