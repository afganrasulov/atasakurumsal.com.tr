"use client";

import { cn } from "@/shared/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

const variants = {
    primary:
        "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30",
    secondary:
        "bg-white text-slate-700 border border-slate-200 shadow-md hover:bg-slate-50",
    outline:
        "bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
};

const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-10 py-4 text-lg rounded-full",
};

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 active:scale-95 cursor-pointer",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
