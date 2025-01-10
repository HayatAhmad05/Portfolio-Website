import React, { useRef, useEffect } from "react";
import styles from './donut.module.css';


const Donut = () => {
    const canvasRef = useRef(null);
    const angleA = useRef(0); // Angle A for rotation
    const angleB = useRef(0); // Angle B for rotation

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const draw = () => {
            const width = canvas.width;
            const height = canvas.height;
            const z = new Array(1760).fill(0);
            const b = new Array(1760).fill(' ');

            context.clearRect(0, 0, width, height); // Clear the canvas

            for (let j = 0; j < 6.28; j += 0.07) {
                for (let i = 0; i < 6.28; i += 0.02) {
                    const c = Math.sin(i);
                    const d = Math.cos(j);
                    const e = Math.sin(angleA.current);
                    const f = Math.sin(j);
                    const g = Math.cos(angleA.current);
                    const h = d + 2;
                    const D = 1 / (c * h * e + f * g + 5);
                    const l = Math.cos(i);
                    const m = Math.cos(angleB.current);
                    const n = Math.sin(angleB.current);
                    const t = c * h * g - f * e;

                    const x = 40 + 30 * D * (l * h * m - t * n);
                    const y = 12 + 15 * D * (l * h * n + t * m);
                    const o = Math.floor(x) + 80 * Math.floor(y);
                    const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

                    if (y > 0 && y < 22 && x > 0 && x < 80 && D > z[o]) {
                        z[o] = D;
                        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
                    }
                }
            }

            context.fillStyle = "transparent";
            context.fillRect(0, 0, width, height); // Clear the canvas with black
            context.fillStyle = "white";

            for (let k = 0; k < 1760; k++) {
                if (k % 80 === 0) {
                    context.fillText('\n', 0, 0); // New line
                }
                context.fillText(b[k], (k % 80) * 6, Math.floor(k / 80) * 12);
            }

            angleA.current += 0.04; // Increment angle A
            angleB.current += 0.02; // Increment angle B
        };

        const intervalId = setInterval(draw, 50); // Call draw at a set interval

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div href="#hero" className={styles.donut}> 
            <canvas ref={canvasRef} ></canvas>
        </div>
    );
};

export default Donut;
