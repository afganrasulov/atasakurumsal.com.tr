"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
    },
    exit: {
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
    },
};

const pageTransition = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
}
