"use client";

import type { ReactNode } from "react";

interface GradientCardProps {
    children: ReactNode;
    className?: string;
    hoverLift?: boolean;
}

/**
 * Premium card with:
 * - Gradient border (1.5px, blue glow)
 * - Glassmorphism inner
 * - Optional hover lift + glow
 */
export function GradientCard({
    children,
    className = "",
    hoverLift = true,
}: GradientCardProps) {
    return (
        <div
            className={`group rounded-[20px] p-[1.5px] transition-all duration-500 ${hoverLift ? "hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" : ""
                }`}
            style={{
                background:
                    "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.15) 100%)",
            }}
        >
            <div
                className={`rounded-[19px] h-full ${className}`}
                style={{
                    background:
                        "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(2,6,23,0.98) 100%)",
                }}
            >
                {children}
            </div>
        </div>
    );
}
