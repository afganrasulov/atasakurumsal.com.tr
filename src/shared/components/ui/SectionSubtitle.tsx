"use client";

import type { ReactNode } from "react";

interface SectionSubtitleProps {
    children: ReactNode;
    className?: string;
}

/**
 * Premium section subtitle with:
 * - Montserrat ExtraLight (200) display font
 * - White/90 color
 * - Condensed tracking (-0.025em)
 */
export function SectionSubtitle({
    children,
    className = "",
}: SectionSubtitleProps) {
    return (
        <p
            className={`text-lg text-white/90 font-display font-extralight tracking-tight leading-relaxed ${className}`}
        >
            {children}
        </p>
    );
}
