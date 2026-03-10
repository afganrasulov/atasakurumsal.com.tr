"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
            style={{
                scaleX,
                background:
                    "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #3B82F6 100%)",
                backgroundSize: "200% 100%",
                animation: "scroll-progress-shift 3s linear infinite",
            }}
        >
            <style jsx>{`
                @keyframes scroll-progress-shift {
                    0% {
                        background-position: 0% 0%;
                    }
                    100% {
                        background-position: 200% 0%;
                    }
                }
            `}</style>
        </motion.div>
    );
}
