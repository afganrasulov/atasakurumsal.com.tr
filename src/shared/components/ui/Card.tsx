import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-3xl border border-slate-100 shadow-sm p-8",
                hover && "hover:shadow-2xl hover:-translate-y-1 transition-all duration-500",
                className
            )}
        >
            {children}
        </div>
    );
}
