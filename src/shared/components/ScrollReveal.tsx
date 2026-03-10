"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealVariant =
    | "fadeUp"
    | "fadeDown"
    | "fadeBlur"
    | "scaleUp"
    | "slideLeft"
    | "slideRight"
    | "rotateIn";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: RevealVariant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    /** Viewport margin for trigger, e.g. "-100px" */
    margin?: string;
    /** If true, applies stagger to direct children */
    stagger?: boolean;
    staggerDelay?: number;
    as?: "div" | "section" | "article" | "span";
}

const variantMap: Record<RevealVariant, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 60, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    fadeBlur: {
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 },
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -5, scale: 0.95 },
        visible: { opacity: 1, rotate: 0, scale: 1 },
    },
};

export function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.7,
    className,
    once = true,
    margin = "-80px",
    stagger = false,
    staggerDelay = 0.12,
    as = "div",
}: ScrollRevealProps) {
    const Component = motion[as] as typeof motion.div;
    const variants = variantMap[variant];

    if (stagger) {
        const containerVariants: Variants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: staggerDelay,
                    delayChildren: delay,
                },
            },
        };

        return (
            <Component
                className={className}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin }}
            >
                {children}
            </Component>
        );
    }

    return (
        <Component
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </Component>
    );
}

/** Item variant for use inside stagger containers */
export const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerScaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerSlideVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};
