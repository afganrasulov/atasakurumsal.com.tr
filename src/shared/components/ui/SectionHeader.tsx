import { cn } from "@/shared/lib/utils";

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    badge,
    title,
    description,
    align = "left",
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" && "text-center",
                className
            )}
        >
            {badge && (
                <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-3 block">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-slate-500 text-lg mt-4 font-medium max-w-2xl">
                    {description}
                </p>
            )}
        </div>
    );
}
