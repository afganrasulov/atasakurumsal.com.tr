"use client";

import type { ReactNode } from "react";

interface SectionBadgeProps {
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}

/**
 * Premium section badge/label with:
 * - Blue accent pill
 * - Uppercase, wide tracking
 * - Optional icon
 */
export function SectionBadge({
    children,
    icon,
    className = "",
}: SectionBadgeProps) {
    return (
        <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] border border-blue-500/20 bg-blue-500/5 mb-6 ${className}`}
        >
            {icon}
            {children}
        </div>
    );
}
