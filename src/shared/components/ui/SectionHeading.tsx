"use client";

import type { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode;
    id?: string;
    className?: string;
    as?: "h1" | "h2" | "h3";
}

/**
 * Premium section heading with:
 * - Montserrat Bold (700) display font
 * - White → gray gradient text
 * - Condensed tracking (-0.05em)
 * - Radial spotlight glow behind text
 */
export function SectionHeading({
    children,
    id,
    className = "",
    as: Tag = "h2",
}: SectionHeadingProps) {
    return (
        <div className="relative">
            {/* Spotlight glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(124,196,243,0.08) 0%, transparent 70%)",
                }}
            />
            <Tag
                id={id}
                className={`relative font-display font-bold tracking-tighter leading-tight ${className}`}
                style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}
            >
                {children}
            </Tag>
        </div>
    );
}
