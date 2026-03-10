"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ShimmerButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "dark" | "white";
    className?: string;
    showArrow?: boolean;
    external?: boolean;
}

const variants = {
    primary:
        "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30",
    dark: "bg-blue-950 text-white hover:bg-blue-900 shadow-lg",
    white: "bg-white text-blue-700 shadow-xl hover:bg-blue-50",
};

export function ShimmerButton({
    href,
    children,
    variant = "primary",
    className = "",
    showArrow = true,
    external = false,
}: ShimmerButtonProps) {
    const baseClass = `group relative overflow-hidden inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${variants[variant]} ${className}`;

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {showArrow && (
                    <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                )}
            </span>

            {/* Shimmer overlay */}
            <motion.span
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] pointer-events-none z-[1]"
                initial={{ left: "-150%" }}
                animate={{ left: "250%" }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 4,
                    duration: 1.2,
                    ease: "easeInOut",
                }}
            />
        </>
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={baseClass}>
            {content}
        </Link>
    );
}
