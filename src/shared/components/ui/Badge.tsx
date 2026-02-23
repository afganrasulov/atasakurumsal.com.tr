import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "default" | "blue" | "green" | "red" | "orange";
    className?: string;
}

const badgeVariants = {
    default: "bg-slate-100 text-slate-600",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    red: "bg-red-50 text-red-600",
    orange: "bg-orange-50 text-orange-600",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                badgeVariants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
