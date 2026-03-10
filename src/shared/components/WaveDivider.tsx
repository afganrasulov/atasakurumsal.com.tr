"use client";

interface WaveDividerProps {
    flip?: boolean;
    color?: string;
    height?: number;
    variant?: "gentle" | "sharp" | "double";
    className?: string;
}

export function WaveDivider({
    color = "59,130,246",
    height = 3,
    className = "",
}: WaveDividerProps) {
    return (
        <div
            className={`relative w-full pointer-events-none select-none ${className}`}
            style={{ height: `${height}px`, zIndex: 5 }}
            aria-hidden="true"
        >
            {/* Ultra-thin gradient line */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(${color},0.06) 25%, rgba(255,255,255,0.08) 50%, rgba(${color},0.06) 75%, transparent 100%)`,
                }}
            />

            {/* Subtle sliding light */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "200px",
                        height: "100%",
                        background: `linear-gradient(90deg, transparent, rgba(${color},0.15), rgba(255,255,255,0.2), rgba(${color},0.15), transparent)`,
                        animation: "dividerLightSlide 4s ease-in-out infinite",
                    }}
                />
            </div>
        </div>
    );
}
